export {addSceneEventListeners};

function addSceneEventListeners (that) {
  that.input.keyboard.on(
    "keydown_ZERO",
    function () {
      that.scene.start('BootScene.js')
    }
  );
  that.input.keyboard.on(
    "keydown_ONE",
    function () {
      that.scene.start('MainScene.js')
    }
  );
  that.input.keyboard.on(
    "keydown_TWO",
    function () {
      that.scene.start('MenuScene.js')
    }
  );

}
