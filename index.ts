import express from 'express';
import bodyParser from 'body-parser';
import register from '@react-ssr/express/register';

const port = 10000;
const app = express();

import AuthRoutes from './routes/authRoutes';
import TerritoryRoutes from './routes/territoryRoutes';

register(app).then(() => {
  // Middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Routes
  app.use('/', AuthRoutes);
  app.use('/', TerritoryRoutes);

  app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
    console.log(`Development URL: http://localhost:${port}`);
  });
});


