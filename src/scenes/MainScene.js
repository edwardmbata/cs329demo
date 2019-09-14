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

    //spritesheet assets
    this.load.spritesheet("adv", "./assets/spriteSheets/adventurer-v1.5-Sheet.png",{
      frameHeight: 50,
      frameWidth: 37
    });


    //tilemap assets
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

    //create the player
    this.player = this.physics.add.sprite(0,0, "adv");
    this.physics.world.setBounds(0, 750, 1280, 210);

    //Create animiations from spriteSheet
    this.anims.create({
      key: "walk",
      frame: this.anims.generateFrameNumbers("adv", {start: 7, end:13}),
      frameRate:10,
      repeat:-1
    });
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("adv", {start:0, end: 6}),
      frameRate: 10,
      repeat: -1
    });

    //Set main camera's boundaries to follow player
    this.cameras.main.setBounds(0,0,400,300);
    this.cameras.main.startFollow(this.player);
  }

  update (time, delta) {
    // Update the scene
    var speed = 6;

    //Create cursor keys and assign events
    var cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
      this.player.x -= speed;
      this.player.anims.play("walk", true);
      this.player.flipX = true;
    } else if (cursors.right.isDown) {
      this.player.x += speed;
      this.player.anims.play("walk", true);
      this.player.flipX = false;
    } else {
      this.player.anims.play("idle", true);
    }
    if (cursors.up.isDown) {
      this.player.y -= speed;
    } else if (cursors.down.isDown) {
      this.player.y += speed;
    } else {
    }
  }
}
