/*global Phaser, window*/
import BootScene from './scenes/BootScene.js';
import Config from './config/config.js';
import MainScene from './scenes/MainScene';
import MenuScene from './scenes/MenuScene';

class Game extends Phaser.Game {
  constructor () {
    super(Config);
    this.scene.add('Boot', BootScene);
    this.scene.start('Boot');
    this.scene.add('MainScene', MainScene);
    this.scene.add('MenuScene', MenuScene);
  }
}

window.game = new Game();
