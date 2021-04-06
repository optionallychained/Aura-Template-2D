import { Component, Core, System, Vec2 } from 'aura';

export class WrapSystem extends System.TwoD.System2D {

    public readonly name = 'Wrap';

    public tick(game: Core.TwoD.Game2D, frameDelta: number): void {
        const wrappables = game.world.filterEntitiesByTags('player', 'enemy');

        for (const wrappable of wrappables) {
            const transform = wrappable.getComponent<Component.TwoD.Transform2D>('Transform2D');

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

    private left(transform: Component.TwoD.Transform2D): number {
        return transform.position.x - (transform.scale.x / 2);
    }

    private right(transform: Component.TwoD.Transform2D): number {
        return transform.position.x + (transform.scale.x / 2);
    }

    private bottom(transform: Component.TwoD.Transform2D): number {
        return transform.position.y - (transform.scale.y / 2);
    }

    private top(transform: Component.TwoD.Transform2D): number {
        return transform.position.y + (transform.scale.y / 2);
    }
}
