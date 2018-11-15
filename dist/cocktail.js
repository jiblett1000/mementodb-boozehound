"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cocktail = {
  name: entry().field('Name'),
  ingredients: entry().field('Ingredients'),
  initialVolume: entry().field('Initial Volume (oz)'),
  initialAbv: entry().field('Initial ABV'),
  dilutionPercent: entry().field('Dilution %'),
  finalVolume: entry().field('Final Volume (oz)'),
  finalAbv: entry().field('Final ABV')
};
var _default = cocktail;
exports.default = _default;
//# sourceMappingURL=../cocktail.js.map