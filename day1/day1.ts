import { readFile, readFileSync } from 'fs';

let food = readFileSync("./day1data.txt", 'utf8').toString()

function add(accumulator, a) {
    return accumulator + a;
  }
let byElf = food.split("\n\r")
let elfFoodBags = byElf.map((e) => e.split('\n'))
let elfFoodBagInts = elfFoodBags.map((elfBag) => elfBag.map((item) => Number(item)))
let sumByElf = elfFoodBagInts.map((elfFoodBag) => elfFoodBag.reduce(add, 0)).map(((item) => Number(item)))
let reverseSortedsums = sumByElf.sort(function(a, b) {
    return b- a;
  })
console.log("Highest", reverseSortedsums[0])
console.log("Top 3", reverseSortedsums.slice(0, 3))


