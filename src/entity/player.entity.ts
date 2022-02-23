import { BoxCollider, Color, Entity, FlatColor, Game, Geometries, Model, Shader, ShaderPrograms, Transform, Vec2 } from 'aura-2d';
import { Health } from '../component/health.component';

export class Player extends Entity {

    constructor() {
        super({
            tag: 'player',
            components: [
                new Transform(new Vec2(0, 0), new Vec2(35, 35), 0, new Vec2(650, 0)),
                new Model(Geometries.SQUARE),
                new Shader(ShaderPrograms.BASIC),
                new FlatColor(Color.green()),
                new BoxCollider(),
                new Health(10)
            ]
        });
    }

    public onCollisionStart(game: Game, other: Entity): void {
        if (other.tag === 'enemy') {
            this.getComponent<Health>('Health').health -= 1;
        }
        else if (other.tag === 'food') {
            game.setData('points', game.getData<number>('points') + 1);
        }
    }
}
