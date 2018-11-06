(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Game/Game_Customer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '81b1ftM8+lBJJMoJTjBsKSG', 'Game_Customer', __filename);
// Script/Game/Game_Customer.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		gold: {
			default: 0,
			type: cc.Integer
		}
	},

	onLoad: function onLoad() {},
	setTo: function setTo(tarX, tarY) {
		this.node.x = tarX;
		this.node.y = tarY;
	},
	moveTo: function moveTo(time, tarX, tarY, onFinish) {
		if (time == 0) {
			cc.error("use setTo instead!!!!!!!!!!!!!!!!!!!!!!!!");
		} else {
			this.time = time;
			this.stepX = (tarX - this.node.x) / time;
			this.stepY = (tarY - this.node.y) / time;
			this.onFinish = onFinish;
		}
	},
	update: function update(dt) {
		if (this.time > 0) {
			this.time -= dt;
			this.node.x += this.stepX * dt;
			this.node.y += this.stepY * dt;
			if (this.time <= 0) {
				this.onFinish();
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
        //# sourceMappingURL=Game_Customer.js.map
        