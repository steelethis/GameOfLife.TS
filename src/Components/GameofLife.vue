<template>
    <canvas id="gameCanvas"></canvas>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Cell from "../gameoflife/cell";
import Game from "../gameoflife/game";

@Component
export default class GameofLifeComponent extends Vue {
    // Data Properties
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    canvasWidth: number;
    canvasHeight: number;
    pixelScale: number;
    targetFps: number;

    private _interval: number;
    get interval():number {
        return 1000 / this.targetFps;
    }

    // Timestamp used to determine framerate.
    private then: number;

    mounted() {
        this.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.setCanvasDimensions(200, 200);
        this.pixelScale = 2;
        this.targetFps = 10;
    }

    private setCanvasDimensions(width: number, height: number): void {
        this.canvas.width = width;
        this.canvas.height = height;
    }
}
</script>
