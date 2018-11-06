
cc.Class({
	extends: cc.Component,

	properties: {
		barSpriteNode: cc.Node,
	},

	onLoad() {
		this.originX = this.barSpriteNode.x;
		this.originW = this.barSpriteNode.width;
		this.currentRate = 1;

		//this.init(10, ()=>{cc.log("->>>> onFinish!");});
	},

	init(time, onFinish) {
		this.time = time;
		this.totalTime = time;
		this.onFinish = onFinish;
	},

	setRate(rate) {
		this.currentRate = rate;
		this.barSpriteNode.width = this.originW * rate;
		this.barSpriteNode.x = this.originX - (this.originW - this.barSpriteNode.width)*0.5;
	},

	update (dt) {
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
	},
});
