import { Angle, Color, Component, Core, Entity, Geometry, Shader, Vec2 } from 'aura';

export class Food extends Entity.Entity {

    private rotateDir: number;

    constructor(position: Vec2) {
        super({
            tag: 'food',
            components: [
                new Component.TwoD.Transform2D(position, new Vec2(25, 25), 0, new Vec2()),
                new Component.Generic.Model(Geometry.TwoD.BOX),
                new Component.Generic.Shader(Shader.Program.TwoD.PROGRAM_BASIC_2D),
                new Component.Generic.FlatColor(new Color(255, 255, 0)),
                new Component.TwoD.BoxCollider2D(new Vec2(25, 25), (game: Core.Game, other: Entity.Entity) => {
                    game.world.removeEntity(this)
                })
            ]
        });

        this.rotateDir = Math.random() <= 0.5 ? -1 : 1;
    }

    public tick(game: Core.TwoD.Game2D, frameDelta: number): void {
        // TODO typeparam required due to bug <missing type in Aura publish>
        this.getComponent<Component.TwoD.Transform2D>(Component.TwoD.Transform2D).rotate(Angle.toRadians(1) * this.rotateDir);
    }
}
