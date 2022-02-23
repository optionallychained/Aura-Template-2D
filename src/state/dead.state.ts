import { Color, Keys, State, Vec2 } from 'aura-2d';

export const DEAD_STATE = new State({
    name: 'dead',
    init: (game) => {
        game.text.addString(
            'You Died!',
            new Vec2(-200, 100),
            new Vec2(50, 50),
            Color.white()
        );

        game.text.addString(
            `Points: ${game.getData<number>('points')}`,
            new Vec2(-200, 0),
            new Vec2(50, 50),
            Color.white()
        );

        game.text.addString(
            'Enter to play again!',
            new Vec2(-460, -100),
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
