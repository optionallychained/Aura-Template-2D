import { Core, Random, System, Vec2 } from 'aura';
import { Health } from '../component/health.component';
import { Enemy } from '../entity/enemy.entity';
import { Food } from '../entity/food.entity';

export class ProgressionSystem extends System.TwoD.System2D {

    public readonly name = 'Progression';

    private enemyAdded = false;

    public tick(game: Core.TwoD.Game2D): void {
        const player = game.world.filterEntitiesByTag('player')[0];

        if (player) {
            if (player.getComponent<Health>('Health').health <= 0) {
                game.switchToState('dead');
            }
        }

        const foods = game.world.filterEntitiesByTag('food');

        if (!foods.length) {
            game.world.addEntity(new Food(
                new Vec2(
                    Random.between(-game.world.dimensions.x / 2, game.world.dimensions.x / 2),
                    Random.between(-game.world.dimensions.y / 2, game.world.dimensions.y / 2)
                )
            ));
        }

        if (game.getData<number>('points') % 5 === 0) {
            if (!this.enemyAdded) {
                const random = Math.random();

                game.world.addEntity(new Enemy(
                    new Vec2(
                        Random.between(-game.world.dimensions.x, game.world.dimensions.x),
                        Random.between(-game.world.dimensions.y, game.world.dimensions.y)
                    ),
                    new Vec2(
                        random < 0.5 ? 500 * Random.between(-1, 1) : 0,
                        random > 0.5 ? 500 * Random.between(-1, 1) : 0
                    )
                ));

                this.enemyAdded = true;
            }
        }
        else {
            this.enemyAdded = false;
        }
    }
}
