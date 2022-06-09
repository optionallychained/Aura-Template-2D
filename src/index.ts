import { Game, Vec2 } from 'aura-2d';
import { DEAD_STATE } from './state/dead.state';
import { MAIN_STATE } from './state/main.state';
import { MENU_STATE } from './state/menu.state';

const game = new Game({
    canvasDimensions: new Vec2(1024, 768),
    states: [
        MENU_STATE,
        MAIN_STATE,
        DEAD_STATE
    ]
});

game.start(MENU_STATE.name);
