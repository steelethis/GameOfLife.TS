import Vue from "vue";
import GameofLifeComponent from "./Components/GameofLife.vue";

let v = new Vue({
    el: "#app",
    template: "<GameofLifeComponent/>",
    components: {GameofLifeComponent},
});

// import { Cell } from "./gameoflife/cell";
// import { Game } from "./gameoflife/game";

// let canvas: HTMLCanvasElement;
// let context: CanvasRenderingContext2D;

// let canvasWidth = 400;
// let canvasHeight = 400;
// let pixelScale = 2;

// let fps: number = 10;
// let interval: number = 1000 / fps;
// let then: number = Date.now();

// let game: Game;

// function setCanvasDimensions(width: number, height: number): void {
//     canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
//     context = canvas.getContext("2d") as CanvasRenderingContext2D;

//     canvas.width = width;
//     canvas.height = height;
// }

// function animationLoop(): void {
//     let now: number = Date.now();
//     let delta: number = now - then;

//     if (delta > interval) {
//         then = now - (delta % interval);
//         drawFrame(game.Biome);
//         game.update();
//     }
//     requestAnimationFrame(animationLoop);
// }

// function drawFrame(drawableCells: Cell[][]): void {
//     context.clearRect(0, 0, canvasWidth, canvasHeight);

//     drawableCells.forEach((row: Cell[], x: number) => {
//         row.forEach((cell: Cell, y: number) => {
//             if (cell.Alive) {
//                 context.fillStyle = "#FF0000";
//                 context.fillRect(x * pixelScale, y * pixelScale, pixelScale, pixelScale);
//             }
//         });
//     });
// }

// window.onload = () => {
//     setCanvasDimensions(canvasWidth, canvasHeight);

//     game = new Game(canvasWidth / pixelScale, canvasHeight / pixelScale);

//     animationLoop();
// };
