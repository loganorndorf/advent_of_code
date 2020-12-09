const fs = require('fs');

const text = fs.readFileSync("./day_five_input.txt").toString('utf-8');
const input = text.split('\n');

function partOne() {
    let ids = [];

    for(entry of input) {
        const rowPiece = entry.slice(0,7);
        const colPiece = entry.slice(7);

        const myRow = getRow(rowPiece);
        const myCol = getCol(colPiece);

        ids.push((myRow * 8 + myCol));

    } 
    ids.sort(function(a, b) {return b-a});
    
    // return ids[0]; Used for partOne only
    return ids;
}

function getRow(rowDir) {
    let minRow = 0;
    let maxRow = 127;

    for(el of rowDir){
        if(el === 'F') {
            maxRow = maxRow - Math.ceil((maxRow - minRow) / 2);
        } else {
            minRow = minRow + Math.ceil((maxRow - minRow)/ 2);
        }
    }

    return maxRow; // You could return either here
}

function getCol(colDir) {
    let minCol = 0;
    let maxCol = 7;

    for(el of colDir) {
        if(el === 'L') {
            maxCol = maxCol - Math.ceil((maxCol - minCol) / 2);
        } else {
            minCol = minCol + Math.ceil((maxCol - minCol) / 2);
        }
    }

    return maxCol;
}

function partTwo() {
    const seatList = partOne();

    for(let i = 0; i < seatList.length; i+= 3){
        if(i-1 > 0) {
            if(seatList[i-1] !== seatList[i]+1) return seatList[i]+1;
            
        }
        if(i+1 < seatList.length) {
            if(seatList[i+1] !== seatList[i]-1) return seatList[i]-1;
        }
    }
}

console.log(partTwo());