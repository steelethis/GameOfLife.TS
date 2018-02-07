export default class Cell {
    private alive: boolean;

    get Alive(): boolean {
        return this.alive;
    }

    constructor(status: boolean) {
        this.alive = status;
    }
}
