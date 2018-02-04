<template>
    <div>
        <div class="options-panel">
            <select v-model="selectedCanvasSize">
                <option v-for="option in canvasSizeOptions" v-bind:value="option.size" v-bind:key="option.label">
                    {{ option.label }}
                </option>
            </select>
            <span>{{ selectedCanvasSize }}</span>
            <input v-model="canvasWidth">
            <p>Height: {{canvasHeight}} Width: {{canvasWidth}}</p>
        </div>
        <div class="game-values">

        </div>
        <div>
            <canvas id="gameCanvas"></canvas>
        </div>
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
    pixelScale: number;
    targetFps: number;

    selectedCanvasSize: number = 200;

    canvasSizeOptions: Array<object> = [
        {label: "200x200", size: 200},
        {label: "400x400", size: 400},
        {label: "600x600", size: 600},
        {label: "800x800", size: 800}
    ]

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
