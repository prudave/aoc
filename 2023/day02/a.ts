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


function getPossibleGameId(line: string): number {
    let isPossible = true;
    const lineParts = line.split(":");
    const gameIDres = lineParts[0].match(/Game (\d+)/);
    if (gameIDres == null) {
        return 0;
    }
    const gameID = Number(gameIDres[1]);

    const rounds = lineParts[1].split(";");

    for (const round of rounds) {
        const roundRes : Bag = {
            red: 0,
            blue: 0,
            green: 0
        };
        const cubes = round.split(",");
        for (let cube of cubes) {
            cube = cube.trim();
            const values = cube.split(" ");
            
            switch (values[1]) {
                case "red":
                    isPossible = (Number(values[0]) > RED) ? false : isPossible;
                    break;
                case "green":
                    isPossible = (Number(values[0]) > GREEN) ? false : isPossible;
                    break;
                case "blue":
                    isPossible = (Number(values[0]) > BLUE) ? false : isPossible;
                    break;
                default:
                    break;
            }

        }
    }
    if (isPossible) {
        return gameID;
    }
    return 0;
}

let gamesSum = 0;
const input: string = fs.readFileSync(FILE, "utf8");
input.split(/\n/).forEach(line =>  {
    gamesSum += getPossibleGameId(line);
});

console.log(gamesSum);