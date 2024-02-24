"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authenticatedMiddleware(req, res, next) {
    if (req.session['isLoggedIn']) {
        next();
    }
    else {
        res.redirect('/account/login');
    }
}
exports.default = authenticatedMiddleware;
//# sourceMappingURL=authenticatedMiddleware.js.map