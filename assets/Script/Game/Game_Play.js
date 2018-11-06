
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {},

	playAction(onFinish) {
		this.onFinish = onFinish;
		this.onFinish(2); // 0 1 2
	}

    // update (dt) {},
});
