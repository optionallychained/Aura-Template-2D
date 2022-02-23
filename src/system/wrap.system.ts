import { Game, System, Transform, Vec2 } from 'aura-2d';

export class WrapSystem extends System {

    constructor() {
        super('Wrap');
    }

    public tick(game: Game): void {
        const wrappables = game.world.filterEntitiesByTags('player', 'enemy');

        for (const wrappable of wrappables) {
            const transform = wrappable.getComponent<Transform>('Transform');

            const left = this.left(transform),
                right = this.right(transform),
                bottom = this.bottom(transform),
                top = this.top(transform);

            if (left >= game.world.dimensions.x / 2) {
                transform.translate(new Vec2(-game.world.dimensions.x - transform.scale.x, 0));
            }
            else if (right <= -game.world.dimensions.x / 2) {
                transform.translate(new Vec2(game.world.dimensions.x + transform.scale.x, 0));
            }

            if (bottom >= game.world.dimensions.y / 2) {
                transform.translate(new Vec2(0, -game.world.dimensions.y - transform.scale.y));
            }
            else if (top <= -game.world.dimensions.y / 2) {
                transform.translate(new Vec2(0, game.world.dimensions.y + transform.scale.y));
            }
        }
    }

    private left(transform: Transform): number {
        return transform.position.x - (transform.scale.x / 2);
    }

    private right(transform: Transform): number {
        return transform.position.x + (transform.scale.x / 2);
    }

    private bottom(transform: Transform): number {
        return transform.position.y - (transform.scale.y / 2);
    }

    private top(transform: Transform): number {
        return transform.position.y + (transform.scale.y / 2);
    }
}
