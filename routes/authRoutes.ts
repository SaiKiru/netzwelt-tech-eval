import { Router } from 'express';
import authController from '../controllers/authController';

const router = Router();

router.post('/account/login', authController.login);

export default router;
