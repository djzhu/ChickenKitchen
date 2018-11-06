
cc.Class({
	extends: cc.Component,

	properties: {
	},

	onLoad() {
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
	},
	onDestroy() {
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
	},

	start() {
		this.gold = 0;

		// 顾客入场
		cc.find("Canvas/Customer").getComponent("Game_CustomerManager").initCunstomer();
		// 3 2 1 go
		cc.find("Canvas/UI/ui_countDown").getComponent("UI_CountDown").startCountDown(() => {
			//cc.log("->>>> count down finish");
			// 走时间
			cc.find("Canvas/UI/ui_timeBar").getComponent("UI_Timer").init(150, this.onTimeOver);
			// 初始化金币
			cc.find("Canvas/UI/ui_scoreBar").getComponent("UI_Number").setNumber(this.gold);
			// 烧菜
			cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_cooking"); // 厨师烧菜动画 loop
			// 互动
			cc.find("Canvas/UI/ui_play").getComponent("Game_Play").playAction((result) => {
				//cc.log("+++>" + result);
				if (result == 0) {
					cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_lost"); // 厨师失败动画
				} else {
					cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_win"); // 厨师胜利动画
				}

				cc.find("Canvas/add_register").getComponent(cc.Animation).play("anim_register"); // 收银机动画
				
				 // 走一个顾客并计算收益
				let gold = cc.find("Canvas/Customer").getComponent("Game_CustomerManager").satisfyCustomer(0);
				this.gold += gold;
				cc.find("Canvas/UI/ui_scoreBar").getComponent("UI_Number").rollNumber(this.gold);
			});
		});
		// 操作 - 厨师动画 收钱 走一个 下一个
		// cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_cooking"); // 厨师烧菜动画 loop
		// cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_win"); // 厨师胜利动画
		// cc.find("Canvas/ch_chief").getComponent(cc.Animation).play("anim_chief_lost"); // 厨师失败动画
		// 时间到结算

	},

	// 时间结束
	onTimeOver() {
		cc.log("Time Over!!");
	},

	onKeyDown(event) {
		switch (event.keyCode) {
			case cc.macro.KEY.a: {
				cc.find("Canvas/add_register").getComponent(cc.Animation).play("anim_register"); // 收银机动画
				let gold = cc.find("Canvas/Customer").getComponent("Game_CustomerManager").satisfyCustomer(0); // 走一个顾客并计算收益
				this.gold += gold;
				cc.find("Canvas/UI/ui_scoreBar").getComponent("UI_Number").rollNumber(this.gold);
				break;
			}
			case cc.macro.KEY.s: {
				cc.find("Canvas/add_register").getComponent(cc.Animation).play("anim_register");
				let gold = cc.find("Canvas/Customer").getComponent("Game_CustomerManager").satisfyCustomer(1);
				this.gold += gold;
				cc.find("Canvas/UI/ui_scoreBar").getComponent("UI_Number").rollNumber(this.gold);
				break;
			}
			case cc.macro.KEY.d: {
				cc.find("Canvas/add_register").getComponent(cc.Animation).play("anim_register");
				let gold = cc.find("Canvas/Customer").getComponent("Game_CustomerManager").satisfyCustomer(2);
				this.gold += gold;
				cc.find("Canvas/UI/ui_scoreBar").getComponent("UI_Number").rollNumber(this.gold);
				break;
			}
			case cc.macro.KEY.c: {
				//cc.find("Canvas/UI/ui_countDown").getComponent("UI_CountDown").startCountDown(() => { cc.log("->>>> count down finish"); });
				break;
			}
		}
	},

	// update (dt) {},
});
