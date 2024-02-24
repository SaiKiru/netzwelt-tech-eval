import { Router } from 'express';
import authController from '../controllers/authController';

const router = Router();

router.get('/account/login', authController.renderLoginForm);
router.post('/account/login', authController.login);

export default router;
