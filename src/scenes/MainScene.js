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
    this.load.spritesheet("adv", "./assets/sprites/jungle/spritesheet.png",{
      frameHeight: 68,
      frameWidth: 115

    });
    this.load.spritesheet("slime","./assets/sprites/slimesprite.png",{
      frameHeight: 14,
      frameWidth: 21

    });
    this.load.spritesheet("player","./assets/sprites/player.png",{
      frameHeight: 93,
      frameWidth: 67
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
    this.player = this.physics.add.sprite(100,100, "slime");
    this.player.setCollideWorldBounds(true);
    //Create animiations from spriteSheet
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("slime", {start:0, end: 2}),
      frameRate: 7.5,
      repeat: -1
    });
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("slime", {start:0, end: 11}),
      frameRate: 15,
      repeat: -1
    });

    //Set main camera's boundaries to follow player
    this.cameras.main.setBounds(0,0,400,300);
    this.cameras.main.startFollow(this.player);
  }

  update (time, delta) {
    // Update the scene
    var speed = 2;

    //Create cursor keys and assign addSceneEventListeners
    var cursors = this.input.keyboard.createCursorKeys();

    if(cursors.right.isDown){
      this.player.x += speed;
      this.player.flipX = false;
      this.player.anims.play("walk",true);
    }
    else if(cursors.left.isDown){
      this.player.x -=speed;
      this.player.flipX = true;
      this.player.anims.play("walk",true)
    }else{
      this.player.anims.play("idle", true);
    }


    if(cursors.up.isDown){
      this.player.y -= 2;
    }else if(cursors.down.isDown){
      this.player.y += 2;
    }else{

    }



  }
}
