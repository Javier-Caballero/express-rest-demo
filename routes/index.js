const router = require('express').Router();

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
    const errors = [];
    if (!req.body.email) {
        errors.push('email is required');
    }
    if (req.body.zipcode && !(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(req.body.zipcode))) {
        errors.push('zip code must be valid');
    }
    if (errors.length) {
        return res.status(400).json({ errors })
    }
    
    res.json(Object.assign({ id: 1}, req.body));
});

module.exports = router;