
cc.Class({
	extends: cc.Component,

	properties: {
	},

	onLoad() {
		this.com_modeClick = this.node.getChildByName("mode_click").getComponent("Game_PlayModeClick");
		this.com_modePress = this.node.getChildByName("mode_press").getComponent("Game_PlayModePress");
		this.com_modeTouch = this.node.getChildByName("mode_touch").getComponent("Game_PlayModeTouch");
	},

	playAction(onFinish) {
		let rd = Math.random() * 3;
		if (rd < 1) {
			let count = parseInt(Math.random() * 5 + 1);
			this.com_modeClick.init(count, (score) => {
				//cc.log("-.>>>> " + score);
				onFinish(score);
			});
		} else if (rd < 2) {
			this.com_modePress.init((score) => {
				//cc.log("-.>>>> " + score);
				onFinish(score);
			});
		} else {
			this.com_modeTouch.init((score) => {
				//cc.log("-.>>>> " + score);
				onFinish(score);
			});
		}
	}

	// update (dt) {},
});
