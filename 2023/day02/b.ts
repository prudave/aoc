import * as fs from "fs";

const FILE = "day02/input.txt";

interface Bag {
    red: number;
    blue: number;
    green: number
}

const RED = 12;
const GREEN = 13;
const BLUE = 14;


function getMinNumPowered(line: string): number {
    const lineParts = line.split(":");
    const rounds = lineParts[1].split(";");

    const roundRes : Bag = {
        red: 0,
        blue: 0,
        green: 0
    };

    for (const round of rounds) {
        const cubes = round.split(",");
        for (let cube of cubes) {
            cube = cube.trim();
            const values = cube.split(" ");
            
            switch (values[1]) {
                case "red":
                    roundRes.red = (roundRes.red < Number(values[0])) ? Number(values[0]) : roundRes.red;
                    break;
                case "green":
                    roundRes.green = (roundRes.green < Number(values[0])) ? Number(values[0]) : roundRes.green;
                    break;
                case "blue":
                    roundRes.blue = (roundRes.blue < Number(values[0])) ? Number(values[0]) : roundRes.blue;
                    break;
                default:
                    break;
            }

        }
    }
    return roundRes.red * roundRes.blue * roundRes.green;
}

let gamesSum = 0;
const input: string = fs.readFileSync(FILE, "utf8");
input.split(/\n/).forEach(line =>  {
    gamesSum += getMinNumPowered(line);
});

console.log(gamesSum);