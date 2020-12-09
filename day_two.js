const fs = require('fs');

const text = fs.readFileSync("./day_two_input.txt").toString('utf-8');
const input = text.split('\n');

function partOne() {
    
    let totalValid = 0;
    
    for(line of input){
        const values = breakUpLine(line)

        const rule   = values[3]
        const strArr = values[4]

        let nextCheckPoint = 0;
        let numCharacters = 0;
        while(strArr.indexOf(rule, nextCheckPoint) !== -1) {
            numCharacters += 1;

            if((strArr.indexOf(rule, nextCheckPoint) + 1) < strArr.length) {
                nextCheckPoint = strArr.indexOf(rule, nextCheckPoint) + 1;
            } else break;

        }

        if(numCharacters >= parseInt(values[1]) && numCharacters <= parseInt(values[2])) {
            totalValid += 1;
        }

    }
    

    return totalValid;
}

function partTwo() {

    let totalValid = 0;

    for(line of input) {
        const values = breakUpLine(line)

        const firstInd  = values[1] - 1;
        const secondInd = values[2] - 1;
        const rule      = values[3];
        const strArr    = values[4];

        let truth = checkValues(firstInd, secondInd, rule, strArr);

        if(truth) {
            totalValid += 1;
        }
    }

    return totalValid;
}

function checkValues(first, second, rule, arr) {
    if(first >= arr.length || second >= arr.length) return false;

    if( (arr[first] === arr[second]) ||
        (arr[first] !== rule && arr[second] !== rule)) 
    {
        return false;
    } 

    return true;

}

function breakUpLine(text) {
    let re = /([0-9]+)-([0-9]+) ([a-z]): ([a-z]*)/;
    let vars = text.match(re);
    return vars;
}

console.log(partTwo());