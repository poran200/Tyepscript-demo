import {NumberCollection} from "./NumberCollection";
import {Sorter} from "./Sorter";

const numberCollection = new NumberCollection([-1,3,2,-5]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection);
