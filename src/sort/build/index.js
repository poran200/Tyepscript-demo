"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var Sorter_1 = require("./Sorter");
var numberCollection = new NumberCollection_1.NumberCollection([-1, 3, 2, -5]);
var sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection);
