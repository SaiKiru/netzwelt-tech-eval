"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username = '', password = '' } = req.body;
        const url = 'https://netzwelt-devtest.azurewebsites.net/Account/SignIn';
        const apiResponse = yield fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        if (apiResponse.status === 200) {
            req.session['isLoggedIn'] = true;
            res.redirect('/home/index');
        }
        else if (apiResponse.status === 404) {
            res.render('login', { error: 'Invalid credentials!' });
        }
        else {
            res.render('login', { error: 'Unknown error. Try again later' });
        }
    });
}
function renderLoginForm(req, res) {
    if (req.session['isLoggedIn']) {
        res.redirect('/home/index');
    }
    else {
        res.render('login');
    }
}
exports.default = {
    login,
    renderLoginForm,
};
//# sourceMappingURL=authController.js.map