"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function TerritoryListItem({ territory }) {
    const [isOpen, setOpen] = (0, react_1.useState)(true);
    return (<li className="territory-list-item">
      <div className={[
            'territory-title',
            isOpen ? 'open' : '',
            territory.children.length === 0 ? 'empty' : '',
        ].join(' ')} onClick={() => setOpen(prev => !prev)}>
        {territory.name}
      </div>

      {isOpen && (<ul>
          {territory.children.map(childTerritory => (<TerritoryListItem territory={childTerritory}/>))}
        </ul>)}
    </li>);
}
exports.default = TerritoryListItem;
//# sourceMappingURL=TerritoryListItem.jsx.map