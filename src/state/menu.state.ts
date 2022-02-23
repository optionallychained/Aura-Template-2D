import { Color, Keys, State, Vec2 } from 'aura-2d';

export const MENU_STATE = new State({
    name: 'menu',
    init: (game) => {
        game.text.addString(
            'Press Enter!',
            new Vec2(-260, 0),
            new Vec2(50, 50),
            Color.white()
        );
    },
    end: (game) => {
        game.text.clearEntities();
    },
    tick: (game) => {
        if (game.input.isKeyDown(Keys.ENTER)) {
            game.switchToState('main');
        }
    }
});
