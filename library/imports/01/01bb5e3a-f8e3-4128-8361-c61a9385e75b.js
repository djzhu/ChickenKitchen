"use strict";
cc._RF.push(module, '01bb546+ONBKINhxhqThedb', 'Game_Play');
// Script/Game/Game_Play.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {},

	onLoad: function onLoad() {
		this.com_modeClick = this.node.getChildByName("mode_click").getComponent("Game_PlayModeClick");
		this.com_modePress = this.node.getChildByName("mode_press").getComponent("Game_PlayModePress");
		this.com_modeTouch = this.node.getChildByName("mode_touch").getComponent("Game_PlayModeTouch");
	},
	playAction: function playAction(onFinish) {
		var rd = Math.random() * 3;
		if (rd < 1) {
			var count = parseInt(Math.random() * 5 + 1);
			this.com_modeClick.init(count, function (score) {
				//cc.log("-.>>>> " + score);
				onFinish(score);
			});
		} else if (rd < 2) {
			this.com_modePress.init(function (score) {
				//cc.log("-.>>>> " + score);
				onFinish(score);
			});
		} else {
			this.com_modeTouch.init(function (score) {
				//cc.log("-.>>>> " + score);
				onFinish(score);
			});
		}
	}

	// update (dt) {},

});

cc._RF.pop();