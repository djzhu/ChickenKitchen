"use strict";
cc._RF.push(module, 'e4d8cR4DPRLsa++gqRMbyo+', 'Game_CustomerManager');
// Script/Game/Game_CustomerManager.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		customer: [], // 所有顾客对象
		lineUpPos: [], // 队伍上的点位
		bubble: null
	},

	onLoad: function onLoad() {
		this.customer = new Array(8);
		this.lineUpPos = new Array(8);
		for (var i = 0; i < this.customer.length; i++) {
			this.customer[i] = this.node.getChildByName("ch_role" + i);
			this.customer[i].active = false;
			this.lineUpPos[i] = new cc.Vec2(this.customer[i].x, this.customer[i].y);
		}

		this.bubble = this.node.getChildByName("add_bubble");
		this.bubble.active = false;
		this.bubbleLocPos = new cc.Vec2(18, 24);

		//this.moveSpeed = 1; // 移动速度
		this.moveTime = 1; // 移动时间

		//cc.log(this.customer[0].getComponent("Game_Customer").gold);
		//var customer = this.customer[0].getComponent("Game_Customer");
		//customer.setTo(30, 55);
		//customer.moveTo(1, 30, 35, ()=> {cc.log("finish..")});
		//this.initCunstomer();
	},


	// 随机取一个客户
	getRandomCustomer: function getRandomCustomer() {
		var rd = parseInt(Math.random() * this.customer.length);
		var node = cc.instantiate(this.customer[rd]);
		node.active = true;
		node.parent = this.node;
		node.setSiblingIndex(0);
		return node;
	},


	// 向前移动一个位置
	moveForward: function moveForward() {
		var _this = this;

		var _loop = function _loop() {
			var customer = _this.currentCustomer[i].getComponent("Game_Customer");
			var index = i;
			_this.scheduleOnce(function () {
				customer.moveTo(_this.moveTime, _this.lineUpPos[index].x, _this.lineUpPos[index].y, function () {});
			}, i * 0.3);
		};

		for (var i = 0; i < this.currentCustomer.length; i++) {
			_loop();
		}
	},


	// 初始化顾客
	initCunstomer: function initCunstomer() {
		this.currentCustomer = new Array(6); // 当前队列上的顾客
		for (var i = 0; i < this.currentCustomer.length; i++) {
			this.currentCustomer[i] = this.getRandomCustomer();
			this.currentCustomer[i].getComponent("Game_Customer").setTo(this.lineUpPos[i + 1].x, this.lineUpPos[i + 1].y);
		}
		// 往前移动
		this.moveForward();
	},


	// 一个顾客离开
	satisfyCustomer: function satisfyCustomer(moodLevel) {
		var _this2 = this;

		// 添加mood
		this.bubble.active = true;
		this.bubble.getComponent("Game_Bubble").setMood(moodLevel);
		this.bubble.parent = this.currentCustomer[0];
		this.bubble.position = this.bubbleLocPos;
		// 第一个离开
		var pos = this.currentCustomer[0].position;
		var customer = this.currentCustomer[0].getComponent("Game_Customer");
		customer.moveTo(this.moveTime * 2, pos.x + 120, pos.y, function () {
			var bubbleNode = customer.node.getChildByName("add_bubble");
			if (bubbleNode != null) {
				// 下一个顾客提前把气泡拿走使用了，上一个顾客销毁时就不需要处理气泡了
				bubbleNode.parent = _this2.node;
				bubbleNode.active = false;
			}
			customer.node.destroy();
		});
		// 队列往前排一个，并在最后新建一个
		for (var i = 0; i < this.currentCustomer.length - 1; i++) {
			this.currentCustomer[i] = this.currentCustomer[i + 1];
		}
		this.currentCustomer[i] = this.getRandomCustomer();
		this.currentCustomer[i].getComponent("Game_Customer").setTo(this.lineUpPos[i + 1].x, this.lineUpPos[i + 1].y);
		// 往前移动
		this.moveForward();

		// 得分
		if (moodLevel == 2) {
			return customer.gold;
		} else if (moodLevel == 1) {
			return parseInt(customer.gold * 0.7);
		} else {
			return 0;
		}
	}
}

// update (dt) {},
);

cc._RF.pop();