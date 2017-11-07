import { Cell } from "./cell";

export class Game {
    private biome: Cell[][];

    constructor(width: number, height: number) {
        this.biome = [];
        this.seedBiome(width, height);
    }

    public update(): void {
        const newGeneration: Cell[][] = [];
    }

    private seedBiome(width: number, height: number): void {
        const aliveChance = 50;

        for (let x = 0; x < width; x++) {
            const column: Cell[] = [];
            for (let y = 0; y < height; y++) {
                column.push(new Cell(true));
            }
            this.biome.push(column);
        }
    }
}
