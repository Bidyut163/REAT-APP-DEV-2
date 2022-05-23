const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

//  Model
const Appeal = require('../../models/Appeal');
const AppealState = require('../../models/AppealState');

// @route Post api/appellants/appeal/new
// @desc  Create an  Appeal
// @access Private

router.post(
    '/new',
    [
        body('firstName', 'Please enter a first name').isLength({ min: 1 }),
        body('lastName', 'Please enter a last name').isLength({ min: 1 }),
        body('addressLine1', 'Please include an addressLine1').isLength({
            min: 1,
        }),
        body('addressLine2', 'Please include an addressLine2').isLength({
            min: 1,
        }),
    ],
    auth,
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

        const { firstName, lastName, addressLine1, addressLine2 } = req.body;
        const appellantId = req.user.id;

        try {
            const appeal = Appeal.build({
                firstName,
                lastName,
                addressLine1,
                addressLine2,
                appellantId,
            });

            await appeal.save();

            const appealState = AppealState.build({
                appellant: 0,
                receptionist: 1,
                registrar: 0,
                bench: 0,
                appealId: appeal.id,
            });

            await appealState.save();

            res.json(appeal);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route Post api/appellants/appeal/receptionist
// @desc  View new Appeals - with receptionist
// @access Private
router.get('/receptionist', auth, async (req, res) => {
    try {
        // find all appeal where appealState is receptionist:1
        const appealIds = await AppealState.findAll({
            attributes: ['appealId'],
            where: {
                receptionist: 1,
            },
        });

        // return an array of appealIds in the form [{appealId: 3}, {appealId: 4}]
        const appealIdsRaw = appealIds.map((appealId) => {
            return appealId.get({ plain: true });
        });

        // returns an array of appealIds in the form [3,4]
        const appealIdsArray = appealIdsRaw.map((appealId) => {
            return appealId.appealId;
        });

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

// @route Post api/appellants/appeal/receptionist/id/forward
// @desc  forward to registrar
// @access Private
router.put('/receptionist/:id/forward', auth, async (req, res) => {
    try {
        const receptionist = await AppealState.findOne({
            attributes: ['receptionist'],
            where: {
                appealId: req.params.id,
            },
        });
        // console.log(receptionist.get({ plain: true }).receptionist);
        // receptionist.get({ plain: true }).receptionist - check for receptionist value in status table AppealStates
        if (receptionist.get({ plain: true }).receptionist) {
            await AppealState.update(
                {
                    appellant: 0,
                    receptionist: 0,
                    registrar: 1,
                    bench: 0,
                },
                {
                    where: { appealId: req.params.id },
                }
            );

            res.json({ msg: 'table updated' });
        } else {
            res.json({ msg: 'appeal is not with the receptionist' });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
