const fs = require('fs');

const text = fs.readFileSync("./day_four_input.txt").toString('utf-8');
const input = text.split(/(\r\n){2,}/);

const cleanInput = input.filter(function(x) {
    return x !== '\r\n';
})

// {PART ONE}
function partOne() {
    let totalValidEntries = 0;
    
    for(line of cleanInput) {
        if(regexMatch(line)) {
            totalValidEntries += 1;
        }
    }

    return totalValidEntries;
}

function regexMatch(entry) {
    const regexPatterns = {
        ecl: /ecl/,
        pid: /pid/,
        eyr: /eyr/,
        hcl: /hcl/,
        byr: /byr/,
        iyr: /iyr/,
        // cid: /(cid:[0-9]{3})/, // OPTIONAL
        hgt: /hgt/
    }


    for(const [key, value] of Object.entries(regexPatterns)) {

        if(!entry.match(value)) {
            return false;
        }
    }

    return true;
}

// {PART TWO}
function partTwo() {
    let totalValidEntries = 0;
    
    for(line of cleanInput) {
        if(advancedRegexMatch(line)) {
            totalValidEntries += 1;
        }
    }

    return totalValidEntries;
}

function advancedRegexMatch(entry) {
    const regexPatterns = {
        byr: /byr:19[2-9].|200[0-2]( |$|\n|\r)/,
        iyr: /iyr:201.|2020( |$|\n|\r)/,
        eyr: /eyr:202.|2030( |$|\n|\r)/,
        hgt: /hgt:(((1[5-8][0-9]|19[0-3])cm)|((59|6[0-9]|7[0-6])in))( |$|\n|\r)/,
        hcl: /hcl:#[0-9a-f]{6}( |$|\n|\r)/,
        ecl: /ecl:(amb|blu|brn|gry|grn|hzl|oth)( |$|\n|\r)/,
        pid: /pid:[0-9]{9}( |$|\n|\r)/
    }


    for(const [key, value] of Object.entries(regexPatterns)) {
        if(!entry.match(value)) {
            console.log(entry);
            console.log("///////////////////////////////////")
            return false;
        }

    }

    return true;
}

console.log(partTwo());

