import { Color, Input, State, Vec2 } from 'aura';

export const DEAD_STATE = new State.TwoD.State2D({
    name: 'dead',
    init: (game) => {
        game.font.addString('Dead!', new Vec2(0, 0), new Vec2(100, 100), new Color(255, 255, 255));

        game.font.addString(
            `Points: ${game.getData<number>('points')}`,
            new Vec2(0, 100),
            new Vec2(100, 100),
            new Color(255, 255, 255)
        );

        game.font.addString('Enter to play again!', new Vec2(0, 150), new Vec2(100, 100), new Color(255, 255, 255));
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
