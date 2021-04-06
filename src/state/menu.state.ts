import { Color, Input, State, Vec2 } from 'aura';

export const MENU_STATE = new State.TwoD.State2D({
    name: 'menu',
    init: (game) => {
        game.font.addString('Press Enter!', new Vec2(0, 0), new Vec2(100, 100), new Color(255, 255, 255));
    },
    end: (game) => {
        game.font.clearEntities();
    },
    tick: (game) => {
        if (game.input.isKeyDown(Input.Keys.ENTER)) {
            game.switchToState('main');
        }
    }
});
