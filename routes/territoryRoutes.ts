import { Router } from 'express';
import TerritoryController from '../controllers/territoryController';

const router = Router();

router.get('/', TerritoryController.renderTerritories);
router.get('/home/index', TerritoryController.renderTerritories);

export default router;
