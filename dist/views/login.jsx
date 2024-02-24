"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("@react-ssr/express");
function Login({ error }) {
    return (<>
      <express_1.Head>
        <title>Login - Netzwelt</title>
      </express_1.Head>

      <div className="login-page">
        <div className="login-form-container">
          <form action="/account/login" method="POST">

            <div className="login-form-input-group">
              <label htmlFor="login-field-username">Username</label>
              <input type="text" name="username" id="login-field-username"/>
            </div>

            <div className="login-form-input-group">
              <label htmlFor="login-field-password">Password</label>
              <input type="password" name="password" id="login-field-password"/>
            </div>

            {error &&
            <div className='error-message'>
                {error}
              </div>}

            <button>Login</button>
          </form>
        </div>
      </div>
    </>);
}
exports.default = Login;
//# sourceMappingURL=login.jsx.map