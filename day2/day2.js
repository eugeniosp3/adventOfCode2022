"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
let rps = (0, fs_1.readFileSync)("./day2.txt", 'utf8').toString().split('\r\n');
function add(accumulator, a) {
    return accumulator + a;
}
const handStrat = new Map([
    ["A", "Y"],
    ["B", "X"],
    ["C", "Z"]
]);
const points = new Map([
    ['AY', 8],
    ['BY', 5],
    ['CY', 2],
    ['AX', 4],
    ['BX', 1],
    ['CX', 7],
    ['AZ', 3],
    ['BZ', 9],
    ['CZ', 6]
]);
const part2Map = new Map([
    ["AX", ["C", 3]],
    ["AY", ["A", 4]],
    ["AZ", ["B", 8]],
    ["BX", ["A", 1]],
    ["BY", ["B", 5]],
    ["BZ", ["C", 9]],
    ["CX", ["B", 2]],
    ["CY", ["C", 6]],
    ["CZ", ["A", 7]],
]);
let rps_cleaned = rps.map((item) => item.replace(/\s/g, ""));
let pointsMappedA = rps_cleaned.map((e) => Number(points.get(e)));
const partA_Answer = pointsMappedA.reduce((ac, curr) => { return ac + curr; });
const partB_answer = rps_cleaned.map((e) => part2Map.get(e)).map((e) => Number(e[1])).reduce((ac, curr) => { return ac + curr; });
console.log(partB_answer);
