import { Request, Response } from 'express';

async function login(req: Request, res: Response) {
  const { username = '', password = '' } = req.body;
  const url = 'https://netzwelt-devtest.azurewebsites.net/Account/SignIn';

  const apiResponse = await fetch(url, {
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
  } else if (apiResponse.status === 404) {
    res.render('login', { error: 'Invalid credentials!' });
  } else {
    res.render('login', { error: 'Unknown error. Try again later' });
  }
}

function renderLoginForm(req: Request, res: Response) {
  if (req.session['isLoggedIn']) {
    res.redirect('/home/index');
  } else {
    res.render('login');
  }
}

export default {
  login,
  renderLoginForm,
};
