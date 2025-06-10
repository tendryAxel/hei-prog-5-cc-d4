import Point, {Direction} from "./constant/Point.ts";

export class Snake {
    body: Point[];

    constructor(x_start: number = 0, y_start: number = 0) {
        this.body = [
            new Point(x_start, y_start),
            new Point(x_start, y_start + 1),
            new Point(x_start, y_start + 2),
        ];
    }

    private getHead(): Point {
        return this.body[this.body.length - 1];
    }

    move(direction: Direction) {
        const shadowHead = this.getHead().duplicateWithDirection(direction);
        // Manage collision
        this.body.push(shadowHead);

        // remove tail
        this.body.shift();
    }
}
