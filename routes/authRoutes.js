const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();


router.post('/signup', authController.signup_post);
router.post('/signin', authController.signin_post);
router.get('/logout', authController.logout_get);

module.exports = router;