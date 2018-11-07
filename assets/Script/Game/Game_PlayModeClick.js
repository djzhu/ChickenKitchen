
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
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

	init(value, onFinish) {
		this.onFinish = onFinish;
		this.value = value;
		this.showNumber(this.value);
		this.limit = 1;
		this.node.active = true;
	},

	showNumber(num){
		for (var i = 0; i < this.numbers.length; i++) {
			this.numbers[i].active = (i == num);
		}
	},

	finish(score) {
		this.limit = 0;
		this.down = false;
		this.node.active = false;
		this.onFinish(score);
	},

	onClick() {
		this.value--;
		if (this.value <= 0) {
			this.finish(2);
		} else {
			this.showNumber(this.value);
		}
	},

	update(dt) {
		if (this.limit > 0) {
			this.limit -= dt;
			if (this.limit <= 0) {
				this.finish(0); // 操作限时
			}
		}
	},
});
