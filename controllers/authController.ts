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
    res.send('Login successful!');
  } else if (apiResponse.status === 404) {
    res.send('Invalid credentials!');
  } else {
    res.send('Unknown error. Try again later');
  }
}

export default {
  login,
};