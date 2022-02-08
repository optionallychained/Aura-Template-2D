import { Color, Component, Core, Entity, Geometry, Shader, Vec2 } from 'aura';

export class Food extends Entity.Entity {

    constructor(position: Vec2) {
        super({
            tag: 'food',
            components: [
                new Component.TwoD.Transform2D(position, new Vec2(25, 25), 0, new Vec2()),
                new Component.Generic.Model(Geometry.TwoD.CIRCLE),
                new Component.Generic.Shader(Shader.Program.TwoD.PROGRAM_BASIC_2D),
                new Component.Generic.FlatColor(Color.yellow()),
                new Component.TwoD.BoxCollider2D()
            ]
        });
    }

    public onCollisionStart(game: Core.Game, other: Entity.Entity): void {
        if (other.tag === 'player') {
            game.world.removeEntity(this)
        }
    }
}
