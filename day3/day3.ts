import { readFile, readFileSync } from 'fs';
import {intersection} from "lodash";

// stores letter values A - Z / 27-52
const theHighs: Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const theHighsPts: Map<string, Number> = new Map()
// maps values to the map 
for (let i=0; i < (theHighs.length);  i++) {
    theHighsPts.set(theHighs[i],  i+27)
}
// stores letter values a-z / 1-26
const theLows = "abcdefghijklmnopqrstuvwxyz".split('')
const theLowsPts : Map<string, Number> = new Map()
// maps values to the map 
for (let i=0; i < (theLows.length);  i++) {
    theLowsPts.set(theLows[i], i+1)
}
for (let i=0; i < (theHighs.length);  i++) {
    theHighsPts.set(theHighs[i],  i+27)
}

//  reads in day3 data and splits it to make an array
let rucks:String = readFileSync("./day3.txt", 'utf8').toString()
let ruckSplit:Array<String> = rucks.split('\n')

// catches the values from each of these
let sumsA:Array<Number> = []
function slicerD (item: String) {
    let halfIndex: number = (item.length)/2
    let firstHalf:Array<string> = item.slice(0, halfIndex).split('')
    let secondHalf:Array<string> = item.slice(halfIndex, item.length).split('')

    let inter: string =  (intersection(firstHalf, secondHalf))[0]
    
    if (theHighs.includes(inter)==true) {
        sumsA.push(theHighsPts.get(inter))
    }
    else if (theLows.includes(inter)==true) {
        sumsA.push(theLowsPts.get(inter))
    }

    }
    

ruckSplit.map((e) => slicerD(e))

//  adds lists
function add(accumulator, a) {
    return accumulator + a;
}
let answerA = sumsA.reduce(add, 0)


let groups: Array<any> = Array()
let counter: any = 0
for (let i=0; i < ruckSplit.length; i++) {
    counter++
    // console.log('I is here', i, ruckSplit[i], "Counter", counter)
    if (counter % 3 == 0) {
        let groupOf3 = ruckSplit.slice(i-2, i+1)
        groups.push(groupOf3)

    }
}
// splits each string and converts to array
let sumsB: Array<any> = []
function getThree(e) {
    let A:Array<string> = e[0].split('')
    let B:Array<string> = e[1].split('')
    let C:Array<string> = e[2].split('')
    let inter: string = intersection(A, B, C)[0]   
    // looks for mapped values  
    if (theHighs.includes(inter)==true) {
        sumsB.push(theHighsPts.get(inter))
    }
    else if (theLows.includes(inter)==true) {
        sumsB.push(theLowsPts.get(inter))
        }
    }



groups.map((e) => getThree(e))
let answerB = sumsB.reduce(add, 0)
console.log(answerA, answerB)
