(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/UI/UI_Timer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f6e920GAJVMiLNSZUoXpvaW', 'UI_Timer', __filename);
// Script/UI/UI_Timer.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		barSpriteNode: cc.Node
	},

	onLoad: function onLoad() {
		this.originX = this.barSpriteNode.x;
		this.originW = this.barSpriteNode.width;
		this.currentRate = 1;

		//this.init(10, ()=>{cc.log("->>>> onFinish!");});
	},
	init: function init(time, onFinish) {
		this.time = time;
		this.totalTime = time;
		this.onFinish = onFinish;
	},
	setRate: function setRate(rate) {
		this.currentRate = rate;
		this.barSpriteNode.width = this.originW * rate;
		this.barSpriteNode.x = this.originX - (this.originW - this.barSpriteNode.width) * 0.5;
	},
	update: function update(dt) {
		if (this.time > 0) {
			this.time -= dt;
			if (this.time >= 0) {
				var rate = this.time / this.totalTime;
				this.setRate(rate);
			} else {
				this.setRate(0);
				if (this.onFinish != null) {
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
        //# sourceMappingURL=UI_Timer.js.map
        