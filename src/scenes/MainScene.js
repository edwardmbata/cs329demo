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
    this.load.image('tiles', './assets/tiles/cavesofgallet_tiles.png');
    this.load.tilemapTiledJSON("map1", "./assets/tiles/map1.json");



    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;

  }

  create (data) {
    //Add event listeners
    ChangeScene.addSceneEventListeners(this);

    //Create the scene
    //create level
    //
    var gameWidth = this.cameras.main.gameWidth;
    var gameHeight = this.cameras.main.gameHeight;

    // When Loading from an array , make sure

    const map = this.make.tilemap({
      key: "map1"
    });

    const tileset = map.addTilesetImage("cavesofgallet_tiles","tiles");
    const layer = map.createStaticLayer("Tile Layer 1", tileset, 0, 0);

    //change size of screen
  }

  update (time, delta) {
    // Update the scene
  }
}
