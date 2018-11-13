"use strict";
cc._RF.push(module, 'b43f5axL/REO6gMvE1Q63Xr', 'UI_Number');
// Script/UI/UI_Number.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		numberSprites: [], // 0-9 sprite节点
		numberSpriteFrames: [] // 0-9 spriteFrame
	},

	onLoad: function onLoad() {
		var count = 10;
		this.numberSprites = new Array(count);
		this.numberSpriteFrames = new Array(count);
		for (var i = 0; i < count; i++) {
			this.numberSprites[i] = this.node.getChildByName(i.toString()).getComponent(cc.Sprite);
			this.numberSpriteFrames[i] = this.numberSprites[i].spriteFrame;
		}

		this.currentNumber = 0;
		this.targetNumber = 0;
		this.setNumber(0);
		//this.rollNumber(100);
	},


	// 直接设置一个数字
	setNumber: function setNumber(number) {
		this.targetNumber = number;
		this.updateNumber(number);
	},


	// 从当前数字跳动变化到目标数字
	rollNumber: function rollNumber(number) {
		this.targetNumber = number;
	},


	// 更新数字
	updateNumber: function updateNumber(number) {
		number = parseInt(number);
		this.currentNumber = number;

		var ns = new Array();
		if (number == 0) {
			ns.push(0);
		} else {
			while (number > 0 && ns.length < 10) {
				var m = number % 10;
				ns.push(m);
				number = parseInt(number / 10);
			}
		}

		for (var i = 0; i < this.numberSprites.length; i++) {
			if (i < ns.length) {
				if (!this.numberSprites[i].node.active) {
					this.numberSprites[i].node.active = true;
				}
				this.numberSprites[i].spriteFrame = this.numberSpriteFrames[ns[i]];
			} else {
				if (this.numberSprites[i].node.active) {
					this.numberSprites[i].node.active = false;
				}
			}
		}
	},
	update: function update(dt) {
		if (this.currentNumber != this.targetNumber) {
			var number = this.currentNumber * 0.9 + this.targetNumber * 0.1;
			if (this.currentNumber < this.targetNumber && number < this.currentNumber + 1) {
				number = this.currentNumber + 1;
			} else if (this.currentNumber > this.targetNumber && number > this.currentNumber - 1) {
				number = this.currentNumber - 1;
			}
			this.updateNumber(number);
		}
	}
});

cc._RF.pop();