import { Color, Component, Input, State, System, Vec2 } from 'aura';
import { Health } from '../component/health.component';
import { Player } from '../entity/player.entity';
import { ProgressionSystem } from '../system/progression.system';
import { WrapSystem } from '../system/wrap.system';

export const MAIN_STATE = new State.TwoD.State2D({
    name: 'main',
    init: (game) => {
        game.setData('points', 0);

        game.addSystems(
            new WrapSystem(),
            new ProgressionSystem(),
            new System.TwoD.Physics2D(),
            new System.TwoD.Collision2D()
        );

        game.world.addEntity(new Player());
    },
    end: (game) => {
        game.removeSystems('Wrap', 'Progression', 'Physics2D', 'Collision2D');
        game.font.clearEntities();
        game.world.clearEntities();
    },
    tick: (game) => {
        game.font.clearEntities();

        const points = game.getData<number>('points');

        game.font.addString(
            `Points: ${points}`,
            new Vec2(-game.world.dimensions.x / 2 + 25, game.world.dimensions.y / 2 - 25),
            new Vec2(30, 30),
            new Color(255, 255, 255)
        );

        const player = game.world.filterEntitiesByTag('player')[0];

        if (player) {
            const health = player.getComponent<Health>('Health').health;
            const healthString = `Health: ${health}`;
            game.font.addString(
                healthString,
                new Vec2(game.world.dimensions.x / 2 - (25 * healthString.length) - 50, game.world.dimensions.y / 2 - 25),
                new Vec2(30, 30),
                new Color(255, 255, 255)
            );

            const transform = player.getComponent<Component.TwoD.Transform2D>('Transform2D');

            if (game.input.isKeyDown(Input.Keys.A)) {
                transform.velocity.setX(-650);
                transform.velocity.setY(0);
            }
            else if (game.input.isKeyDown(Input.Keys.D)) {
                transform.velocity.setX(650);
                transform.velocity.setY(0);
            }
            else if (game.input.isKeyDown(Input.Keys.W)) {
                transform.velocity.setX(0);
                transform.velocity.setY(650);
            }
            else if (game.input.isKeyDown(Input.Keys.S)) {
                transform.velocity.setX(0);
                transform.velocity.setY(-650)
            }
        }
    }
});
