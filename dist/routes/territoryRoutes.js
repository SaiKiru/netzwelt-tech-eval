"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const territoryController_1 = __importDefault(require("../controllers/territoryController"));
const authenticatedMiddleware_1 = __importDefault(require("../middleware/authenticatedMiddleware"));
const router = (0, express_1.Router)();
router.get('/', authenticatedMiddleware_1.default, territoryController_1.default.renderTerritories);
router.get('/home/index', authenticatedMiddleware_1.default, territoryController_1.default.renderTerritories);
exports.default = router;
//# sourceMappingURL=territoryRoutes.js.map