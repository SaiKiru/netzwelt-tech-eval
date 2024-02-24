import { Head } from '@react-ssr/express';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Netzwelt</title>
      </Head>

      <div className="login-page">
        <div className="login-form-container">
          <form
            action="/account/login"
            method="POST">

            <div className="login-form-input-group">
              <label htmlFor="login-field-username">Username</label>
              <input
                type="text"
                name="username"
                id="login-field-username" />
            </div>

            <div className="login-form-input-group">
              <label htmlFor="login-field-password">Password</label>
              <input
                type="password"
                name="password"
                id="login-field-password" />
            </div>

            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
