const fs = require('fs');

const text = fs.readFileSync("./day_six_input.txt").toString('utf-8');
const input = text.split(/(\r\n){2,}/);

let cleanInput = input.filter(function(x) {
    return x !== '\r\n';
})

const partOneInput = cleanInput.map(function(x) {
    x = x.split('');
    x = x.filter(function(y) {
        return y !== '\r' && y !== '\n';
    })
    return x;
})

function partOne() {
    let totalAnswers = 0;

    for(entry of partOneInput) {
        let uniqueAnswers = [...new Set(entry)];
        
        totalAnswers += uniqueAnswers.length;
    }
    
    return totalAnswers;
}

function partTwo() {
    let totalEntries = 0;
    
    for(entry of cleanInput) {
        console.log('/-----------------------------------------------------------/')
        
        let lines = entry.split("\r\n");

        let initCharacters = lines[0].split("");
        const immovableInit = lines[0];
        lines = lines.slice(1);

        for(char of immovableInit) {
            for(line of lines) { // triple for loop cringeeee
                if(!line.includes(char)) {
                    initCharacters.splice(initCharacters.indexOf(char), 1);
                    break;
                }
            }

            console.log(initCharacters);
        }
        
        totalEntries += initCharacters.length;
    }


    return totalEntries;
}

console.log(partTwo());