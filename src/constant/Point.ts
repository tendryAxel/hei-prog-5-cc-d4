export default class Point {
    readonly x: number;
    readonly y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    public duplicateWithDirection(direction: Direction): Point {
        switch (direction) {
            case Direction.Up: return new Point(this.x, this.y - 1);
            case Direction.Down: return new Point(this.x, this.y + 1);
            case Direction.Left: return new Point(this.x - 1, this.y);
            case Direction.Right: return new Point(this.x + 1, this.y);
            default: throw new Error("Unknown Direction");
        }
    }
}

export enum Direction {
    Up,
    Down,
    Left,
    Right,
}
