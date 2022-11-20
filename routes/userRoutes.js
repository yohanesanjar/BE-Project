const { Router } = require('express');
const userController = require('../controllers/userController');
const { requireAuth, isAdmin } = require('../middleware/authMiddleware');

const router = Router();

router.get('/users',[requireAuth, isAdmin], userController.user_get);
router.get('/users/:id', userController.user_get_id);
router.put('/users/edit/:id',requireAuth, userController.user_edit);
router.delete('/users/:id',[requireAuth, isAdmin],userController.user_delete);

module.exports = router;