"use strict";
cc._RF.push(module, '5d518z7XyhJf77hEBccJMkn', 'Game_PlayModePress');
// Script/Game/Game_PlayModePress.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {},

	onLoad: function onLoad() {
		this.down = false;
		this.value = 0;
		this.limit = 0; // 操作限时

		this.spr_filler = this.node.getChildByName("filler").getComponent(cc.Sprite);

		this.node.on(cc.Node.EventType.TOUCH_START, this.onDown, this);
		this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onDown, this);

		this.node.on(cc.Node.EventType.TOUCH_END, this.onUp, this);
		this.node.on(cc.Node.EventType.MOUSE_UP, this.onUp, this);

		this.node.active = false;
	},
	onDown: function onDown(event) {
		this.down = true;
		this.limit = 0;
	},
	onUp: function onUp(event) {
		this.down = false;
		if (this.value > 0.9) {
			this.finish(2);
		} else if (this.value > 0.7) {
			this.finish(1);
		} else {
			this.finish(0);
		}
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