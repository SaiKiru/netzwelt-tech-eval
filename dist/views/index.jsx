"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("@react-ssr/express");
const TerritoryListItem_1 = __importDefault(require("../components/TerritoryListItem"));
function Home({ territories }) {
    return (<>
      <express_1.Head>
        <title>Territories - Netzwelt</title>
      </express_1.Head>

      <div className="territories-page">
        <div className="territories-page-header">
          <h1>Territories</h1>
          <div>Here are the territories</div>
        </div>

        <main className="territories-container">
          <ul>
            {territories.map(territory => (<TerritoryListItem_1.default territory={territory}/>))}
          </ul>
        </main>
      </div>
    </>);
}
exports.default = Home;
//# sourceMappingURL=index.jsx.map