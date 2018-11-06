
cc.Class({
	extends: cc.Component,

	properties: {
		moodNode: [],
	},

	onLoad() {
		this.moodNode = new Array(3);
		for (var i = 0; i < this.moodNode.length; i++) {
			this.moodNode[i] = this.node.getChildByName("add_mood" + i);
		}

		//this.setMood(1);
	},

	// moodLevel: 0红 1黄 2绿
	setMood(moodLevel) {
		for (var i = 0; i < this.moodNode.length; i++) {
			this.moodNode[i].active = (i == moodLevel) ? true : false;
		}
	}

	// update (dt) {},
});
