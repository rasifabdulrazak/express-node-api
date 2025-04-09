const router = require('express').Router();
const {userSignup,userLogin} = require('../controllers/authController');
const { signupValidationRules,loginValidationRules } = require('../core/validators/authValidators');
const {validateFields} = require('../middlewares/authMiddleware');


router.post('/signup/',signupValidationRules,validateFields,userSignup);
router.post('/login/',loginValidationRules,validateFields,userLogin);

module.exports = router;