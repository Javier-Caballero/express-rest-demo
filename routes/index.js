const router = require('express').Router();
const user = require('../handlers/user');

/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group foo - Operations about user
 * @param {string} email.query - username or email - eg: user@domain
 * @param {string} password.query - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

router.get('/api', (req, res) => {
    res.send('hey there!');
});

/**
 * This function comment is parsed by doctrine
 * @route POST /api
 * @group foo - Operations about user
 * @param {string} email.query - username or email - eg: user@domain
 * @param {string} password.query - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

router.post('/api', (req, res) => {
    let output;
    try {
        output = user.create(req.body);
    } catch (errors) {
        return res.status(400).json({ errors })
    }
    res.json(output);
});

module.exports = router;