import { Color, Component, Core, Entity, Geometry, Shader, Vec2 } from 'aura';
import { Health } from '../component/health.component';

export class Player extends Entity.Entity {

    constructor() {
        super({
            tag: 'player',
            components: [
                new Component.TwoD.Transform2D(new Vec2(0, 0), new Vec2(50, 50), 0, new Vec2(650, 0)),
                new Component.Generic.Model(Geometry.TwoD.BOX),
                new Component.Generic.Shader(Shader.Program.TwoD.PROGRAM_BASIC_2D),
                new Component.Generic.FlatColor(new Color(0, 255, 0)),
                new Component.TwoD.BoxCollider2D(new Vec2(50, 50), (game: Core.Game, other: Entity.Entity) => {
                    if (other.tag === 'enemy') {
                        this.getComponent<Health>(Health).health -= 1;
                    }
                }),
                new Health(10)
            ]
        });
    }

    public tick(game: Core.TwoD.Game2D, frameDelta: number): void { }
}
