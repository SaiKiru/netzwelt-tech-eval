import { Request, Response } from 'express';
import TerritoriesResponse from '../types/api/TerritoriesResponse';
import Territory from '../types/Territory';

async function renderTerritories(req: Request, res: Response) {
  const apiResponse = await fetch('https://netzwelt-devtest.azurewebsites.net/Territories/All');
  const territoriesData: TerritoriesResponse = await apiResponse.json();

  const territories = formatTerritories(territoriesData.data);

  res.render('index', { territories });
}


function formatTerritories(territories: Territory[]) {
  const formatted = [];

  for (let territory of territories) {
    if (territory.parent === null) {
      formatted.push({ ...territory, children: [] });
    } else {
      const parent = traverseTerritories(formatted, territory.parent);

      parent.children.push({ ...territory, children: [] });
    }
  }

  return formatted;
}

function traverseTerritories(territories: Territory[], id: string) {
  for (let territory of territories) {
    if (territory.id === id) {
      return territory;
    } else if (id.startsWith(territory.id)) {
      return traverseTerritories(territory.children, id);
    }
  }
}

export default {
  renderTerritories,
};
