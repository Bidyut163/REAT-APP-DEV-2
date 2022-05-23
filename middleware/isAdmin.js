const keys = require('../config/keys');

// User model
const User = require('../models/User');

module.exports = async function (req, res, next) {
    try {
        let user_id = req.user.id.replace(keys.jwtPayload, '');

        // const user = await User.findAll({
        //     raw: true,
        //     attributes: { exclude: ['password'] },
        //     where: {
        //         id: user_id,
        //     },
        // });

        const user = await User.findByPk(user_id, {
            attributes: { exclude: ['password'] },
        });

        // verify Admin

        if (user.role !== 'ADMIN') {
            return res
                .status(401)
                .json({ msg: 'Not an Admin, authorization denied' });
        }

        next();
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error at admin');
    }
};
