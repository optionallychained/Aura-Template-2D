import { Core, Shader, Vec2 } from 'aura';
import { DEAD_STATE } from './state/dead.state';
import { MAIN_STATE } from './state/main.state';
import { MENU_STATE } from './state/menu.state';

const game = new Core.TwoD.Game2D({
    canvasDimensions: new Vec2(1024, 768)
});

game.registerShader(Shader.Program.TwoD.PROGRAM_BASIC_2D);

game.registerShader(Shader.Program.TwoD.PROGRAM_TEXTURE_COLORED_2D);

game.addStates(MENU_STATE, MAIN_STATE, DEAD_STATE);

game.start(MENU_STATE.name);
