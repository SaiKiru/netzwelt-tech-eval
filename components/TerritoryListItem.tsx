import { ComponentProps, useState } from 'react';
import Territory from '../types/Territory';

interface TerritoryListItemProps extends ComponentProps<'div'> {
  territory: Territory;
}

export default function TerritoryListItem({ territory }: TerritoryListItemProps) {
  const [isOpen, setOpen] = useState(true);

  return (
    <li className="territory-list-item">
      <div
        className={[
          'territory-title',
          isOpen ? 'open' : '',
          territory.children.length === 0 ? 'empty' : '',
        ].join(' ')}
        onClick={() => setOpen(prev => !prev)}>
        {territory.name}
      </div>

      {isOpen && (
        <ul>
          {territory.children.map(childTerritory => (
            <TerritoryListItem territory={childTerritory} />
          ))}
        </ul>
      )}
    </li>
  );
}
