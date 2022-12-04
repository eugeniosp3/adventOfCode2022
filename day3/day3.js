"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var lodash_1 = require("lodash");
// stores letter values A - Z / 27-52
var theHighs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var theHighsPts = new Map();
// maps values to the map 
for (var i = 0; i < (theHighs.length); i++) {
    theHighsPts.set(theHighs[i], i + 27);
}
// stores letter values a-z / 1-26
var theLows = "abcdefghijklmnopqrstuvwxyz".split('');
var theLowsPts = new Map();
// maps values to the map 
for (var i = 0; i < (theLows.length); i++) {
    theLowsPts.set(theLows[i], i + 1);
}
for (var i = 0; i < (theHighs.length); i++) {
    theHighsPts.set(theHighs[i], i + 27);
}
//  reads in day3 data and splits it to make an array
var rucks = (0, fs_1.readFileSync)("./day3.txt", 'utf8').toString();
var ruckSplit = rucks.split('\n');
// catches the values from each of these
var sumsA = [];
function slicerD(item) {
    var halfIndex = (item.length) / 2;
    var firstHalf = item.slice(0, halfIndex).split('');
    var secondHalf = item.slice(halfIndex, item.length).split('');
    var inter = ((0, lodash_1.intersection)(firstHalf, secondHalf))[0];
    if (theHighs.includes(inter) == true) {
        sumsA.push(theHighsPts.get(inter));
    }
    else if (theLows.includes(inter) == true) {
        sumsA.push(theLowsPts.get(inter));
    }
}
ruckSplit.map(function (e) { return slicerD(e); });
//  adds lists
function add(accumulator, a) {
    return accumulator + a;
}
var answerA = sumsA.reduce(add, 0);
var groups = Array();
var counter = 0;
for (var i = 0; i < ruckSplit.length; i++) {
    counter++;
    // console.log('I is here', i, ruckSplit[i], "Counter", counter)
    if (counter % 3 == 0) {
        var groupOf3 = ruckSplit.slice(i - 2, i + 1);
        groups.push(groupOf3);
    }
}
// splits each string and converts to array
var sumsB = [];
function getThree(e) {
    var A = e[0].split('');
    var B = e[1].split('');
    var C = e[2].split('');
    var inter = (0, lodash_1.intersection)(A, B, C)[0];
    // looks for mapped values  
    if (theHighs.includes(inter) == true) {
        sumsB.push(theHighsPts.get(inter));
    }
    else if (theLows.includes(inter) == true) {
        sumsB.push(theLowsPts.get(inter));
    }
}
groups.map(function (e) { return getThree(e); });
var answerB = sumsB.reduce(add, 0);
console.log(answerA, answerB);
