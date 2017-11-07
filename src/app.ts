import { Game } from "./gameoflife/game";

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

let canvasWidth = 400;
let canvasHeight = 400;
let pixelScale = 4;

let game: Game;

function setCanvasDimensions(width: number, height: number): void {
    canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    context = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = width;
    canvas.height = height;
}

function animationLoop(): void {
    game.update();
    requestAnimationFrame(animationLoop);
}

window.onload = () => {
    console.log("window loaded");

    setCanvasDimensions(canvasWidth, canvasHeight);

    game = new Game(canvasWidth / pixelScale, canvasHeight / pixelScale);

    animationLoop();
};
