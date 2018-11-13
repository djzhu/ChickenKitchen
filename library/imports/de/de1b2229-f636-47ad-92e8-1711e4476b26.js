"use strict";
cc._RF.push(module, 'de1b2Ip9jZHrZLoFxHkR2sm', 'UI_Rabbit');
// Script/UI/UI_Rabbit.js

"use strict";

var GameManager = require("GameManager");
cc.Class({
	extends: cc.Component,

	properties: {},

	onLoad: function onLoad() {
		this.activeCount = 10; // 激活需要的触发次数
		this.lastTime = 12; // 持续时间

		this.anim_btnRabbit = this.node.getChildByName("btn_rabbit").getComponent(cc.Animation);
		this.cheerRabbit = this.node.getChildByName("anim_rabbit");

		this.cheerRabbit.active = false;
		this.counter = 0;
		this.timer = 0;
	},


	// 一次笑脸增加一次计数
	onGoodService: function onGoodService() {
		if (this.counter < this.activeCount) {
			this.counter++;
			if (this.counter >= this.activeCount) {
				this.anim_btnRabbit.play();
			}
		}
	},


	// 激活拉拉兔
	onClick_Rabbit: function onClick_Rabbit() {
		if (this.counter >= this.activeCount) {
			this.counter = 0;
			this.anim_btnRabbit.stop();

			this.cheerRabbit.active = true;
			this.timer = this.lastTime;
			GameManager.instance.startCheerTime();
		}
	},
	update: function update(dt) {
		if (this.timer > 0) {
			this.timer -= dt;
			if (this.timer <= 0) {
				this.cheerRabbit.active = false;
				GameManager.instance.endCheerTime();
			}
		}
	}
});

cc._RF.pop();