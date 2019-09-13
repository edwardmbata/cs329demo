/*global Phaser*/
import * as ChangeScene from './ChangeScene.js';
export default class MainScene extends Phaser.Scene {
  constructor () {
    super('MainScene');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preload assets
    this.load.image('logo', './assets/logo.png');

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
    //Add event listeners
    ChangeScene.addSceneEventListeners(this);

    //Create the scene
    var text = this.add.text(this.centerX, this.centerY, 'Main Scene');
  }

  update (time, delta) {
    // Update the scene
  }
}
