"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var food = (0, fs_1.readFileSync)("./day1data.txt", 'utf8').toString();
function add(accumulator, a) {
    return accumulator + a;
}
console.log(food);
var byElf = food.split("\n\r");
var elfFoodBags = byElf.map(function (e) { return e.split('\n'); });
console.log(elfFoodBags);
var elfFoodBagInts = elfFoodBags.map(function (elfBag) { return elfBag.map(function (item) { return Number(item); }); });
var sumByElf = elfFoodBagInts.map(function (elfFoodBag) { return elfFoodBag.reduce(add, 0); }).map((function (item) { return Number(item); }));
var reverseSortedsums = sumByElf.sort(function (a, b) {
    return b - a;
});
console.log("Highest", reverseSortedsums[0]);
console.log("Top 3", reverseSortedsums.slice(0, 3));
