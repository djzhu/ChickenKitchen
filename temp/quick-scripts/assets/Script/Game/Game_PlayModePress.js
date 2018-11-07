(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Game/Game_PlayModePress.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5d518z7XyhJf77hEBccJMkn', 'Game_PlayModePress', __filename);
// Script/Game/Game_PlayModePress.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {},

	onLoad: function onLoad() {
		var _this = this;

		this.down = false;
		this.value = 0;
		this.limit = 0; // 操作限时

		this.spr_filler = this.node.getChildByName("filler").getComponent(cc.Sprite);

		this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
			_this.down = true;
			_this.limit = 0;
		}, this);

		this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
			_this.down = false;
			if (_this.value > 0.9) {
				_this.finish(2);
			} else if (_this.value > 0.7) {
				_this.finish(1);
			} else {
				_this.finish(0);
			}
		}, this);

		this.node.active = false;
	},
	init: function init(onFinish) {
		this.onFinish = onFinish;
		this.value = 0;
		this.spr_filler.fillRange = this.value;
		this.limit = 2;
		this.node.active = true;
	},
	finish: function finish(score) {
		this.limit = 0;
		this.down = false;
		this.node.active = false;
		this.onFinish(score);
	},
	update: function update(dt) {
		if (this.limit > 0) {
			this.limit -= dt;
			if (this.limit <= 0) {
				this.finish(0); // 操作限时
			}
		}

		if (this.down) {
			this.value += dt;
			this.spr_filler.fillRange = this.value > 1 ? 1 : this.value;
			if (this.value > 1) {
				this.finish(0); // 超界
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
        //# sourceMappingURL=Game_PlayModePress.js.map
        