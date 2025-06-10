import type {Snake} from "./Snake.ts";
import * as readline from "node:readline";
import { stdin as input, stdout as output } from 'process';

enum KEY {
    w = "w",
    a = "a",
    s = "s",
    d = "d",
}

abstract class GameState {
    constructor() {
        readline.emitKeypressEvents(input);
        input.setRawMode(true);
    }

    getKey(): KEY {
        throw new Error("Not implemented");
    }

    abstract update(): void;

    abstract display(): void;
}

export class RunningState extends GameState {
    readonly snake: Snake;
    readonly width: number;
    readonly height: number;

    constructor(snake: Snake, width: number, height: number) {
        super();
        this.snake = snake;
        this.width = width;
        this.height = height;
    }

    public update() {}

    public display() {}
}