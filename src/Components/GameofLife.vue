<template>
    <div>
        <div class="options-panel">
            <input v-model="canvasWidth">
            <p>Height: {{canvasHeight}} Width: {{canvasWidth}}</p>
        </div>
        <canvas id="gameCanvas"></canvas>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import * as Cell from "../gameoflife/cell";
import * as Game from "../gameoflife/game";

@Component
export default class GameofLifeComponent extends Vue {
    // Data Properties
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    canvasWidth: number = 200;
    canvasHeight: number = 200;
    testVal: number = 10;
    pixelScale: number;
    targetFps: number;

    private _interval: number;
    get interval():number {
        return 1000 / this.targetFps;
    }

    // Timestamp used to determine framerate.
    private then: number;


// DONT SET VALUES HERE UNLESS YOU PLAN ON THEM NEVER CHANGING.  I learned something about Vue here.
    created() {
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
