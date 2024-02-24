import {
  Document,
  Head,
  Main,
} from '@react-ssr/express';

export default class extends Document {
  render() {
    return (
      <html lang="en">

      <Head>
        <title>Netzwelt Technical Evaluation</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </Head>

      <body>
      <Main />
      </body>

      </html>
    );
  }
}
