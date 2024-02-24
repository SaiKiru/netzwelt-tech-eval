import { Request, Response, NextFunction } from 'express';

export default function authenticatedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.session['isLoggedIn']) {
    next();
  } else {
    res.redirect('/account/login');
  }
}
