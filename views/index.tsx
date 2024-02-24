import { Head } from '@react-ssr/express';
import Territory from '../types/Territory';
import { ComponentProps } from 'react';
import TerritoryListItem from '../components/TerritoryListItem';

interface HomeProps extends ComponentProps<'div'> {
  territories: Territory[];
}

export default function Home({ territories }: HomeProps) {
  return (
    <>
      <Head>
        <title>Territories - Netzwelt</title>
      </Head>

      <div className="territories-page">
        <div className="territories-page-header">
          <h1>Territories</h1>
          <div>Here are the territories</div>
        </div>

        <main className="territories-container">
          <ul>
            {territories.map(territory => (
              <TerritoryListItem territory={territory} />
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
