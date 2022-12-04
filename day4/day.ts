import { readFile, readFileSync } from 'fs';
import {_} from 'lodash'


let data: Array<string> = readFileSync("./day4.txt", 'utf8').toString().split('\n')

let data2: Array<Array<number>> = data.map(e => e.split(/[-,]+/))

// creates the range list - it is literal and unlike python
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
// makes the list out of the relevant numbers
let partA = []

function getListsSub(item) {
    let startA: number = Number(item[0])
    let endA: number = Number(item[1])
    let listA:Array<number> = range(startA, endA)
    let startB: number = Number(item[2])
    let endB : number= Number(item[3])
    let listB :Array<number> = range(startB, endB)
    let vA = listA.every(val => listB.includes(val));
    let vB = listB.every(val => listA.includes(val));
    if ((vA==true) || (vB==true)) {
        partA.push("x")
    }
}


data2.map(item => getListsSub(item))
let partAAnswer = partA.length


let partB = []

function getListsOverlap(item) {
    let startA: number = Number(item[0])
    let endA: number = Number(item[1])
    let listA:Array<number> = range(startA, endA)
    let startB: number = Number(item[2])
    let endB : number= Number(item[3])
    let listB :Array<number> = range(startB, endB)
    // let setA = listA
    // let setB = listB
    console.log(listA, listB)
    let vA = _.intersection(listA, listB)
    if (vA.length >= 1) {
        partB.push('X')
    }
}



data2.map(item => getListsOverlap(item))
let partBAnswer = partB.length
console.log(partBAnswer)
