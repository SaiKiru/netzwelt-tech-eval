import express from 'express';

const port = 10000;
const app = express();

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
  console.log(`Development URL: http://localhost:${port}`);
});
