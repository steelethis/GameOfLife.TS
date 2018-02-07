import Cell from "./cell";
import Game from "./game";

export class GameOfLifeMain {
    private pixelScale: number;
    private fps: number;
    private interval: number;
    private then: number;

    private game: Game;

    private width: number;
    private height: number;

    private context: CanvasRenderingContext2D;

    constructor(width: number, height: number, pixelScale: number,
                renderContext: CanvasRenderingContext2D, targetFps: number) {
        this.game = new Game(width / pixelScale, height / pixelScale);
        this.width = width;
        this.height = height;
        this.pixelScale = pixelScale;
        this.fps = targetFps;
        this.interval = 1000 / this.fps;
        this.context = renderContext;
        this.then = Date.now();
    }

    public Start(): void {
        this.animationLoop();
    }

    private animationLoop(): void {
        const now: number = Date.now();
        const delta: number = now - this.then;

        if (delta > this.interval) {
            this.then = now - (delta % this.interval);
            this.drawFrame(this.game.Biome);
            this.game.update();
        }
        requestAnimationFrame(() => this.animationLoop());
    }

    private drawFrame(drawableCells: Cell[][]): void {
        this.context.clearRect(0, 0, this.width, this.height);

        drawableCells.forEach((row: Cell[], x: number) => {
            row.forEach((cell: Cell, y: number) => {
                if (cell.Alive) {
                    this.context.fillStyle = "#FF0000";
                    this.context.fillRect(x * this.pixelScale, y * this.pixelScale, this.pixelScale, this.pixelScale);
                }
            });
        });
    }
}