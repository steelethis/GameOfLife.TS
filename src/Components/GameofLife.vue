<template>
    <p>Hello World</p>
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
        this.setCanvasDimensions(400, 400);
        this.pixelScale = 2;
        this.targetFps = 10;
    }

    private setCanvasDimensions(width: number, height: number): void {
        this.canvasWidth = width;
        this.canvasHeight = height;
    }
}
</script>
