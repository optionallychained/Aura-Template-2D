import { BoxCollider, Color, Entity, FlatColor, Game, Geometries, Model, Shader, ShaderPrograms, Transform, Vec2 } from 'aura-2d';

export class Food extends Entity {

    constructor(position: Vec2) {
        super({
            tag: 'food',
            components: [
                new Transform(position, new Vec2(25, 25), 0, new Vec2()),
                new Model(Geometries.CIRCLE),
                new Shader(ShaderPrograms.BASIC),
                new FlatColor(Color.yellow()),
                new BoxCollider()
            ]
        });
    }

    public onCollisionStart(game: Game, other: Entity): void {
        if (other.tag === 'player') {
            game.world.removeEntity(this)
        }
    }
}
