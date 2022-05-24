const keys = require('../config/keys');

// User model
const User = require('../models/User');

module.exports = async function (req, res, next) {
    try {
        let user_id = req.user.id.replace(keys.jwtPayload, '');

        const user = await User.findByPk(user_id, {
            attributes: { exclude: ['password'] },
        });

        // verify REGISTRAR

        if (user.role !== 'REGISTRAR') {
            return res
                .status(401)
                .json({ msg: 'Not a REGISTRAR, authorization denied' });
        }

        next();
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};
