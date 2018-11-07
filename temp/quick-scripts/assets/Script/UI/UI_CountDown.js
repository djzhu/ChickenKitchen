(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/UI/UI_CountDown.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '93869/Hn1dDCqRqF1nTppR3', 'UI_CountDown', __filename);
// Script/UI/UI_CountDown.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {},

	onLoad: function onLoad() {
		this.countDownNode = new Array();
		this.countDownNode.push(this.node.getChildByName("3"));
		this.countDownNode.push(this.node.getChildByName("2"));
		this.countDownNode.push(this.node.getChildByName("1"));
		this.countDownNode.push(this.node.getChildByName("go"));
		//
		this.countDownNode[0].active = false;
		this.countDownNode[1].active = false;
		this.countDownNode[2].active = false;
		this.countDownNode[3].active = false;
		//
		this.countDownIndex = -1;
		//
		this.timer = 0;
	},
	startCountDown: function startCountDown(onFinish) {
		this.countDownIndex = 0;
		this.countDownNode[0].active = true;
		this.countDownNode[1].active = false;
		this.countDownNode[2].active = false;
		this.countDownNode[3].active = false;
		this.countDownNode[0].getComponent(cc.Animation).play();
		this.onFinish = onFinish;
	},
	update: function update(dt) {
		if (this.countDownIndex >= 0) {
			this.timer += dt;
			if (this.timer >= 0.5) {
				this.timer = 0;

				this.countDownNode[this.countDownIndex].active = false;
				this.countDownIndex++;
				if (this.countDownIndex < this.countDownNode.length) {
					this.countDownNode[this.countDownIndex].active = true;
					this.countDownNode[this.countDownIndex].getComponent(cc.Animation).play();
				} else {
					this.countDownIndex = -1;
					this.onFinish();
				}
			}
		}
	}
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
        //# sourceMappingURL=UI_CountDown.js.map
        