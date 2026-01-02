import * as fs from "fs";

const FILE = "day01/input.txt";

const stringToNumTable = new Map<string, number>();
stringToNumTable.set("one", 1);
stringToNumTable.set("two", 2);
stringToNumTable.set("three", 3);
stringToNumTable.set("four", 4);
stringToNumTable.set("five", 5);
stringToNumTable.set("six", 6);
stringToNumTable.set("seven", 7);
stringToNumTable.set("eight", 8);
stringToNumTable.set("nine", 9);

function extartCalibrationValue(line: string): number {
    let reverseLine = line.split("").reverse().join("");
    console.log(reverseLine);
    let firstdigits = line.match(/\d|(one|two|three|four|five|six|seven|eight|nine)/g);
    let lastdigits = reverseLine.match(/\d|(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/g);
    
    if (firstdigits && lastdigits) {
        let number = Number(firstdigits[0]);
        let first = (isNaN(number)) ? stringToNumTable.get(firstdigits[0]) : number;
        
        number = Number(lastdigits[0]);
        let last = (isNaN(number)) ? stringToNumTable.get(lastdigits[0].split("").reverse().join("")) : number;
        
        if (first && last)
            return (first * 10) + last;
    }
    return 0;
}

let calibrationSum = 0;
const input: string = fs.readFileSync(FILE, "utf8");
input.split(/\n/).forEach(line =>  {
    calibrationSum += extartCalibrationValue(line);
});

console.log(calibrationSum);