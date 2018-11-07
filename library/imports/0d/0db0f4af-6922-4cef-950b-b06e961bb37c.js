"use strict";
cc._RF.push(module, '0db0fSvaSJM75ULsG6WG7N8', 'Game_PlayModeClick');
// Script/Game/Game_PlayModeClick.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {},

	onLoad: function onLoad() {
		this.value = 0;
		this.limit = 0; // 操作限时

		this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);

		this.numbers = new Array(6);
		for (var i = 0; i < this.numbers.length; i++) {
			this.numbers[i] = this.node.getChildByName(i.toString());
			this.numbers[i].active = false;
		}

		this.node.active = false;
	},
	init: function init(value, onFinish) {
		this.onFinish = onFinish;
		this.value = value;
		this.showNumber(this.value);
		this.limit = 1;
		this.node.active = true;
	},
	showNumber: function showNumber(num) {
		for (var i = 0; i < this.numbers.length; i++) {
			this.numbers[i].active = i == num;
		}
	},
	finish: function finish(score) {
		this.limit = 0;
		this.down = false;
		this.node.active = false;
		this.onFinish(score);
	},
	onClick: function onClick() {
		this.value--;
		if (this.value <= 0) {
			this.finish(2);
		} else {
			this.showNumber(this.value);
		}
	},
	update: function update(dt) {
		if (this.limit > 0) {
			this.limit -= dt;
			if (this.limit <= 0) {
				this.finish(0); // 操作限时
			}
		}
	}
});

cc._RF.pop();