"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const register_1 = __importDefault(require("@react-ssr/express/register"));
const express_session_1 = __importDefault(require("express-session"));
const port = 10000;
const app = (0, express_1.default)();
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const territoryRoutes_1 = __importDefault(require("./routes/territoryRoutes"));
(0, register_1.default)(app).then(() => {
    // Middleware
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use((0, express_session_1.default)({
        secret: 'netzwelt-app-secret',
        resave: false,
        saveUninitialized: false,
    }));
    // Routes
    app.use('/', authRoutes_1.default);
    app.use('/', territoryRoutes_1.default);
    app.listen(port, () => {
        console.log(`App is listening on port ${port}`);
        console.log(`Development URL: http://localhost:${port}`);
    });
});
//# sourceMappingURL=index.js.map