const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const keys = require('../../config/keys');

// Middleware
const auth = require('../../middleware/auth');

// Appellant Model
const Appellant = require('../../models/Appellant');

// @route POST api/appellants/register
// @desc  register an appellant
// @access Public

router.post(
    '/register',
    [
        body('email', 'Please include a valid email').isEmail(),
        body(
            'password',
            'Please enter a password with 6 or more character'
        ).isLength({
            min: 6,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            let errObj = {};
            errors.array().map((error) => (errObj[error.param] = error.msg));
            return res.status(400).json(errObj);
        }

        const { email, password } = req.body;

        try {
            // See if user exists
            const existingUser = await Appellant.findOne({
                where: { email: email },
            });

            if (existingUser) {
                return res.status(400).json({
                    email: 'User already exists',
                });
            }

            // Create new appellant
            const appellant = Appellant.build({
                email: email,
                password: password,
            });

            // generate the salt
            const salt = await bcrypt.genSalt(10);

            // hash the password using bcryptjs
            appellant.password = await bcrypt.hash(password, salt);

            // save the appellant
            await appellant.save();

            // Return jsonwebtoken
            const payload = {
                user: {
                    id: appellant.id,
                    type: 'APPELLANT',
                },
            };

            jwt.sign(
                payload,
                keys.jwtSecret,
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;

                    res.json({ token: token });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route POST api/appellants/login
// @desc  login an appellant
// @access Public

router.post(
    '/login',
    [
        body('email', 'Please include a valid email').isEmail(),
        body('password', 'password is required').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            let errObj = {};
            errors.array().map((error) => {
                errObj[error.param] = error.msg;
            });
            return res.status(400).json(errObj);
        }

        const { email, password } = req.body;

        // see if the user exists
        try {
            const appellant = await Appellant.findOne({
                where: { email: email },
            });

            if (!appellant) {
                return res.status(400).json({
                    email: 'User not found',
                });
            }

            // Check for - Match Password
            const isMatch = await bcrypt.compare(password, appellant.password);

            if (!isMatch) {
                return res.status(400).json({
                    password: 'Invalid credentials',
                });
            }

            // return jsonwebtoken
            const payload = {
                user: {
                    id: appellant.id,
                    type: 'APPELLANT',
                },
            };

            jwt.sign(
                payload,
                keys.jwtSecret,
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route GET api/appellants/auth
// @desc  get current user
// @access Private

router.get('/auth', auth, async (req, res) => {
    const user_id = req.user.id;

    const user = await Appellant.findOne({
        attributes: { exclude: ['password'] },
        where: { id: user_id },
    });

    res.json(user);
});

module.exports = router;
