import { Collision, Color, Keys, Physics, State, Transform, Vec2 } from 'aura-2d';
import { Health } from '../component/health.component';
import { Player } from '../entity/player.entity';
import { ProgressionSystem } from '../system/progression.system';
import { WrapSystem } from '../system/wrap.system';

export const MAIN_STATE = new State({
    name: 'main',
    init: (game) => {
        game.setData('points', 0);

        game.addSystems(
            new WrapSystem(),
            new ProgressionSystem(),
            new Physics(),
            new Collision()
        );

        game.world.addEntity(new Player());
    },
    end: (game) => {
        game.removeSystems('Wrap', 'Progression', 'Physics', 'Collision');
        game.text.clearEntities();
        game.world.clearEntities();
    },
    tick: (game) => {
        game.text.clearEntities();

        const points = game.getData<number>('points');

        game.text.addString(
            `Points: ${points}`,
            new Vec2(-game.world.dimensions.x / 2 + 25, game.world.dimensions.y / 2 - 25),
            new Vec2(30, 30),
            Color.white()
        );

        const player = game.world.filterEntitiesByTag('player')[0];

        if (player) {
            const health = player.getComponent<Health>('Health').health;
            const healthString = `Health: ${health}`;
            game.text.addString(
                healthString,
                new Vec2(game.world.dimensions.x / 2 - (25 * healthString.length) - 50, game.world.dimensions.y / 2 - 25),
                new Vec2(30, 30),
                Color.white()
            );

            const transform = player.getComponent<Transform>('Transform');

            if (game.input.isKeyDown(Keys.A)) {
                transform.velocity.setX(-650);
                transform.velocity.setY(0);
            }
            else if (game.input.isKeyDown(Keys.D)) {
                transform.velocity.setX(650);
                transform.velocity.setY(0);
            }
            else if (game.input.isKeyDown(Keys.W)) {
                transform.velocity.setX(0);
                transform.velocity.setY(650);
            }
            else if (game.input.isKeyDown(Keys.S)) {
                transform.velocity.setX(0);
                transform.velocity.setY(-650)
            }
        }
    }
});
