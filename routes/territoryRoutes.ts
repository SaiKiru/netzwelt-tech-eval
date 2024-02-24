import { Router } from 'express';
import TerritoryController from '../controllers/territoryController';
import authenticatedMiddleware from '../middleware/authenticatedMiddleware';

const router = Router();

router.get('/', authenticatedMiddleware, TerritoryController.renderTerritories);
router.get('/home/index', authenticatedMiddleware, TerritoryController.renderTerritories);

export default router;
