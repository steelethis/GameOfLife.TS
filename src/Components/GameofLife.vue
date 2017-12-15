<template>
    <div>
        <div class="options-panel">
            <p>Height: {{canvasHeight}} Width: {{canvasWidth}}</p>
        </div>
        <canvas id="gameCanvas"></canvas>
    </div>
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
    testVal: number = 10;
    pixelScale: number;
    targetFps: number;

    private _interval: number;
    get interval():number {
        return 1000 / this.targetFps;
    }

    // Timestamp used to determine framerate.
    private then: number;

    created() {
        this.canvasWidth = 200;
        this.canvasHeight = 200;
    }

    mounted() {
        this.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.setCanvasDimensions(this.canvasWidth, this.canvasHeight);
        this.pixelScale = 2;
        this.targetFps = 10;
    }

    private setCanvasDimensions(width: number, height: number): void {
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
    }
}
</script>
