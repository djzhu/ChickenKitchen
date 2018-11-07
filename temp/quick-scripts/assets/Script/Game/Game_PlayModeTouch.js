(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Game/Game_PlayModeTouch.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e832bSHbvZPcIoPXjKmQ3uc', 'Game_PlayModeTouch', __filename);
// Script/Game/Game_PlayModeTouch.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {},

	onLoad: function onLoad() {
		this.value = -1;
		this.valueMin = 270;
		this.valueMax = 304;
		this.limit = 0; // 操作限时

		this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);

		this.pointer = this.node.getChildByName("pointer");
		this.pointer.rotation = 0;

		this.node.active = false;
	},
	init: function init(onFinish) {
		this.onFinish = onFinish;
		this.value = 0;
		this.pointer.rotation = 0;
		this.limit = 1;
		this.node.active = true;
	},
	finish: function finish(score) {
		this.limit = 0;
		this.node.active = false;
		this.onFinish(score);
	},
	onClick: function onClick() {
		if (this.value > this.valueMin && this.value < this.valueMax) {
			this.finish(2);
		} else {
			this.finish(0);
		}
	},
	update: function update(dt) {
		if (this.limit > 0) {
			this.limit -= dt;
			if (this.limit <= 0) {
				this.finish(0); // 操作限时
			}
		}

		if (this.value >= 0) {
			this.value += 360 * dt;
			this.pointer.rotation = this.value;
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
        //# sourceMappingURL=Game_PlayModeTouch.js.map
        