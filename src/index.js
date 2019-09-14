/*global Phaser, window*/
import BootScene from './scenes/BootScene.js';
import Config from './config/config.js';
import MainScene from './scenes/MainScene.js';
import MenuScene from './scenes/MenuScene.js';

class Game extends Phaser.Game {
  constructor () {
    super(Config);
    this.scene.add('Boot', BootScene);
    this.scene.add('MainScene', MainScene);
    this.scene.add('MenuScene', MenuScene);
    this.scene.start('MainScene');
  }
}

window.game = new Game();
