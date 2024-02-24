import express from 'express';
import bodyParser from 'body-parser';

const port = 10000;
const app = express();

import AuthRoutes from './routes/authRoutes';

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', AuthRoutes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
  console.log(`Development URL: http://localhost:${port}`);
});
