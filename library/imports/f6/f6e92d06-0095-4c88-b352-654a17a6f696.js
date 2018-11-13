"use strict";
cc._RF.push(module, 'f6e920GAJVMiLNSZUoXpvaW', 'UI_Timer');
// Script/UI/UI_Timer.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {},

	onLoad: function onLoad() {
		this.barSpriteNode = this.node.getChildByName("ui_bar");
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