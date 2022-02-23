import { BoxCollider, Color, Entity, FlatColor, Geometries, Model, Shader, ShaderPrograms, Transform, Vec2 } from 'aura-2d';

export class Enemy extends Entity {

    constructor(position: Vec2, velocity: Vec2) {
        super({
            tag: 'enemy',
            components: [
                new Transform(position, new Vec2(30, 30), 0, velocity),
                new Model(Geometries.SQUARE),
                new Shader(ShaderPrograms.BASIC),
                new FlatColor(Color.red()),
                new BoxCollider()
            ]
        });
    }
}
