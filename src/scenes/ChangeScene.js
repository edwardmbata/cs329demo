export {addSceneEventListeners};

function addSceneEventListeners (that) {
  that.input.keyboard.on(
    "keydown_ESC",
    function () {
      that.scene.start('Boot')
    }
  );
  that.input.keyboard.on(
    "keydown_ONE",
    function () {
      that.scene.start('MainScene')
    }
  );
  that.input.keyboard.on(
    "keydown_TWO",
    function () {
      that.scene.start('MenuScene')
    }
  );

}
