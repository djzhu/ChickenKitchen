
cc.Class({
	extends: cc.Component,

	properties: {
		gold: {
			default: 0,
			type: cc.Integer,
		},
	},

	onLoad() {
	},

	setTo(tarX, tarY) {
		this.node.x = tarX;
		this.node.y = tarY;
	},

	moveTo(time, tarX, tarY, onFinish) {
		if (time == 0) {
			cc.error("use setTo instead!!!!!!!!!!!!!!!!!!!!!!!!");
		} else {
			this.time = time;
			this.stepX = (tarX - this.node.x) / time;
			this.stepY = (tarY - this.node.y) / time;
			this.onFinish = onFinish;
		}
	},

	update(dt) {
		if (this.time > 0) {
			this.time -= dt;
			this.node.x += this.stepX * dt;
			this.node.y += this.stepY * dt;
			if (this.time <= 0) {
				this.onFinish();
			}
		}
	},
});
