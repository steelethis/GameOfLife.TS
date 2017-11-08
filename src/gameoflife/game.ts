import { Cell } from "./cell";

export class Game {
    private biome: Cell[][];

    get Biome(): Cell[][] {
        return this.biome;
    }

    constructor(width: number, height: number) {
        this.biome = [];
        this.seedBiome(width, height);
    }

    public update(): void {
        const newGeneration: Cell[][] = [];

        this.biome.forEach((row: Cell[], x: number) => {
            newGeneration.push([]);
            row.forEach((cell: Cell, y: number) => {
                let aliveNeighbors: number = 0;

                const offsets: number[][] = [
                    [-1, -1],
                    [-1, 0],
                    [-1, 1],
                    [0, -1],
                    [0, 0],
                    [0, 1],
                    [1, -1],
                    [1, 0],
                    [1, 1],
                ];

                offsets.forEach((offsetPoint: number[]) => {
                    let xOffset: number = x + offsetPoint[0];
                    let yOffset: number = y + offsetPoint[1];

                    // if the x offset or y offset are out of bounds at any point,
                    // just set them to (0, 0) to skip over them.

                    if (xOffset < 0 || xOffset >= row.length) {
                        xOffset = 0;
                        yOffset = 0;
                    }
                    if (yOffset < 0 || yOffset >= this.biome.length) {
                        xOffset = 0;
                        yOffset = 0;
                    }

                    if (xOffset !== 0 && yOffset !== 0) {
                        if (this.biome[xOffset][yOffset].Alive) {
                            aliveNeighbors += 1;
                        }
                    }
                });

                if (cell.Alive) {
                    if (aliveNeighbors < 2) {
                        newGeneration[x].push(new Cell(false));
                    } else if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                        newGeneration[x].push(new Cell(true));
                    } else if (aliveNeighbors > 3) {
                        newGeneration[x].push(new Cell(false));
                    }
                } else if (!cell.Alive && aliveNeighbors === 3) {
                    newGeneration[x].push(new Cell(true));
                } else {
                    newGeneration[x].push(new Cell(false));
                }
            });
        });

        this.biome = newGeneration;
    }

    private seedBiome(width: number, height: number): void {
        const aliveChance = 75;

        for (let x = 0; x < width; x++) {
            const column: Cell[] = [];
            for (let y = 0; y < height; y++) {
                const aliveRoll: number = Math.floor(Math.random() * 100);

                if (aliveRoll > 50) {
                    column.push(new Cell(true));
                } else {
                    column.push(new Cell(false));
                }
            }
            this.biome.push(column);
        }
    }
}
