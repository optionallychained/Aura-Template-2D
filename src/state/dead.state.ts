import { Color, Input, State, Vec2 } from 'aura';

export const DEAD_STATE = new State.TwoD.State2D({
    name: 'dead',
    init: (game) => {
        game.font.addString(
            'You Died!',
            new Vec2(-200, 100),
            new Vec2(50, 50),
            Color.white()
        );

        game.font.addString(
            `Points: ${game.getData<number>('points')}`,
            new Vec2(-200, 0),
            new Vec2(50, 50),
            Color.white()
        );

        game.font.addString(
            'Enter to play again!',
            new Vec2(-460, -100),
            new Vec2(50, 50),
            Color.white()
        );
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
