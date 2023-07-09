import { Scene } from "../scene";

export class Menu extends Scene{
    constructor(game) {
        super(game);
    }

    init() {
        super.init();
    }

    render(time) {
        this.game.screen.drawImage(30, 160, 'title');
        super.render(time);
    }
}