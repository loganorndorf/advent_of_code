const fs = require('fs');

const text = fs.readFileSync("./day_three_input.txt").toString('utf-8');
const input = text.split('\n');



function partOne() {
    const lineLength = input[0].length - 1; //line length is 11 -> 0-10
    const SlopeX = 3;
    const SlopeY = 1;


    let totalTrees = 0;
    let currX = 0;

    for(let line in input) {
        line = parseInt(line);

        if(line === 0){
            continue;
        }

        currX = (currX + SlopeX);
        if(currX >= lineLength) {
            currX = (currX % lineLength);
        }

        if(input[line].charAt(currX) === '#') {
            totalTrees += 1;
        }
    }

    return totalTrees;
}

// function slopeOne() {

// }


function partTwo() {
    let totalTreesProduct = 1;

    totalTreesProduct *= getTrees(1,1);
    totalTreesProduct *= getTrees(3,1);
    totalTreesProduct *= getTrees(5,1);
    totalTreesProduct *= getTrees(7,1);
    totalTreesProduct *= getTrees(1,2);

    return totalTreesProduct;

}

function getTrees(xSlope, ySlope) {
    const lineLength = input[0].length - 1; //line length is 11 -> 0-10
    const SlopeX = xSlope;
    const SlopeY = ySlope;

    let totalTrees = 0;
    let currX = 0;

    for(let line = 0; line < input.length; line += SlopeY) {
        line = parseInt(line);

        if(line === 0){
            continue;
        }

        currX = (currX + SlopeX);
        if(currX >= lineLength) {
            currX = (currX % lineLength);
        }

        if(input[line].charAt(currX) === '#') {
            totalTrees += 1;
        }
    }

    return totalTrees;
}


console.log(partTwo());