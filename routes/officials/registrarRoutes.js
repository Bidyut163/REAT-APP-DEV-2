const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Middlewares
const auth = require('../../middleware/auth');
const isRegistrar = require('../../middleware/isRegistrar');

// Models
const Appeal = require('../../models/Appeal');
const AppealState = require('../../models/AppealState');
const Checklist = require('../../models/Checklist');

// @route Post api/registrar/appeals
// @desc  View all Appeals - with registrar
// @access Private
router.get('/appeals', auth, isRegistrar, async (req, res) => {
    try {
        // find all appealIds where appealState is registrar:1
        const appealIds = await AppealState.findAll({
            attributes: ['appealId'],
            where: {
                registrar: 1,
            },
        });

        // return an array of appealIds in the form [{appealId: 3}, {appealId: 4}]
        const appealIdsRaw = appealIds.map((appealId) => {
            return appealId.get({ plain: true });
        });

        // returns an array of appealIds in the form [3,4]
        const appealIdsArray = appealIdsRaw.map((id) => {
            return id.appealId;
        });

        // find the appeals with registrar from appeals table
        const appeals = await Appeal.findAll({
            where: {
                id: appealIdsArray,
            },
        });

        res.json(appeals);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

// @route GET api/registrar/appeals/:id
// @desc  View a single appeal details
// @access Private
router.get('/appeals/:id', auth, isRegistrar, async (req, res) => {
    try {
        const appeal = await Appeal.findOne({
            where: {
                id: req.params.id,
            },
        });

        res.json(appeal);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route POST api/registrar/appeals/:id/checklist
// @desc  fill Form A
// @access Private

router.post(
    '/appeals/:id/checklist',
    [
        body('appealNum', 'Please enter a appeal number').isLength({ min: 1 }),
        body('appellant', 'Please enter a appellant name').isLength({ min: 1 }),
        body('respondent', 'Please enter a respondent name').isLength({
            min: 1,
        }),
    ],
    auth,
    isRegistrar,
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // return res.status(400).json({ errors: errors.array() });

            let errObj = {};
            errors.array().map((error) => {
                errObj[error.param] = error.msg;
            });
            return res.status(400).json(errObj);
        }

        const { appealNum, appellant, respondent } = req.body;
        const appealId = req.params.id;

        try {
            // Create a checklist instance
            const checklist = Checklist.build({
                appeal_num: appealNum,
                appellant: appellant,
                respondent: respondent,
                appealId: appealId,
            });

            await checklist.save();

            res.json(checklist);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route PUT api/registrar/appeals/:id/forward
// @desc  forward to bench
// @access Private

router.put('/appeals/:id/forward', auth, isRegistrar, async (req, res) => {
    try {
        const registrar = await AppealState.findOne({
            attributes: ['registrar'],
            where: {
                appealId: req.params.id,
            },
        });

        if (registrar.get({ plain: true }).registrar) {
            await AppealState.update(
                {
                    appellant: 0,
                    receptionist: 0,
                    registrar: 0,
                    bench: 1,
                },
                {
                    where: { appealId: req.params.id },
                }
            );

            res.json({ msg: 'table updated' });
        } else {
            res.json({ msg: 'appeal is not with the registrar' });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
