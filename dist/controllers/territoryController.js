"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function renderTerritories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiResponse = yield fetch('https://netzwelt-devtest.azurewebsites.net/Territories/All');
        const territoriesData = yield apiResponse.json();
        const territories = formatTerritories(territoriesData.data);
        res.render('index', { territories });
    });
}
function formatTerritories(territories) {
    const formatted = [];
    for (let territory of territories) {
        if (territory.parent === null) {
            formatted.push(Object.assign(Object.assign({}, territory), { children: [] }));
        }
        else {
            const parent = traverseTerritories(formatted, territory.parent);
            parent.children.push(Object.assign(Object.assign({}, territory), { children: [] }));
        }
    }
    return formatted;
}
function traverseTerritories(territories, id) {
    for (let territory of territories) {
        if (territory.id === id) {
            return territory;
        }
        else if (id.startsWith(territory.id)) {
            return traverseTerritories(territory.children, id);
        }
    }
}
exports.default = {
    renderTerritories,
};
//# sourceMappingURL=territoryController.js.map