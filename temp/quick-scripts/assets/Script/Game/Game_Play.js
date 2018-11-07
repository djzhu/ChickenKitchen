(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Game/Game_Play.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '01bb546+ONBKINhxhqThedb', 'Game_Play', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Game_Play.js.map
        