
var GameManager = cc.Class({
	extends: cc.Component,

	statics: {
		instance: null,
	},
	properties: {
	},

	onLoad() {
		GameManager.instance = this;
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
	},
	onDestroy() {
		cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
	},

	start() {

		this.gold = 0;
		//
		this.cheerTime = false;
		//
		this.com_customerManager = cc.find("Canvas/Customer").getComponent("Game_CustomerManager");
		this.com_countDown = cc.find("Canvas/UI/ui_countDown").getComponent("UI_CountDown");
		this.com_timeBar = cc.find("Canvas/UI/ui_timeBar").getComponent("UI_Timer");
		this.com_scoreBar = cc.find("Canvas/UI/ui_goldBar").getComponent("UI_Number");
		this.com_play = cc.find("Canvas/UI/ui_play").getComponent("Game_Play");
		this.com_rabbit = cc.find("Canvas/UI/ui_rabbit").getComponent("UI_Rabbit");
		this.com_settlement = cc.find("Canvas/UI/ui_settlement").getComponent("UI_Settlement");
		//
		this.anim_chief = cc.find("Canvas/ch_chief").getComponent(cc.Animation);
		this.anim_register = cc.find("Canvas/add_register").getComponent(cc.Animation);

		//
		this.com_settlement.node.active = false;

		// 游戏正常速度
		this.setGameSpeed(1);
		// 顾客入场
		this.com_customerManager.initCunstomer(() => { });
		// 3 2 1 go
		this.com_countDown.startCountDown(() => {
			// 走时间
			let self = this;
			this.com_timeBar.init(150, () => {
				self.setGameSpeed(0);
				self.com_settlement.node.active = true;
				self.com_settlement.init(self.gold, () => {
					this.com_settlement.node.active = false;
					this.setGameSpeed(1);
					this.com_timeBar.init(50, () => {
						self.setGameSpeed(0);
						self.com_settlement.node.active = true;
						self.com_settlement.init(self.gold, null);
					});
					this.cooking();
				});
			});
			// 初始化金币
			this.com_scoreBar.setNumber(this.gold);
			// 开始
			this.cooking();
		});
	},

	// 游戏开始
	//startGame() { },

	// 触发cheer time
	startCheerTime() {
		cc.log("start cheer time");
		this.cheerTime = true;
		this.setGameSpeed(4);
	},
	// 结束cheer time
	endCheerTime() {
		cc.log("end cheer time");
		this.cheerTime = false;
		this.setGameSpeed(1);
	},

	// 游戏速度
	setGameSpeed(speed) {
		this.gameSpeed = speed;
		this.com_customerManager.setSpeed(speed);
	},

	// 队伍前进 result当前交互结果: 0不满意 1普通 2满意
	moveUp(result) {
		// 排队
		let gold = this.com_customerManager.satisfyCustomer(result, () => { this.cooking(); });
		if (gold > 0) {
			this.anim_register.play(); // 收银机动画
			this.gold += gold;
			this.com_scoreBar.rollNumber(this.gold);
		}
	},
	// 烧菜互动
	cooking() {
		if (this.gameSpeed == 0) { return; }

		// 烧菜
		this.anim_chief.play("anim_chief_cooking"); // 厨师烧菜动画 loop
		// 拉拉兔时间
		if (this.cheerTime) {
			this.anim_chief.play("anim_chief_win"); // 厨师胜利动画
			var result = 2;
			this.moveUp(result);
		} else {
			// 互动
			this.com_play.playAction((result) => {
				if (result == 0) {
					this.anim_chief.play("anim_chief_lost"); // 厨师失败动画
				} else {
					this.anim_chief.play("anim_chief_win"); // 厨师胜利动画
					if (result == 2) {
						// 拉拉兔计数
						this.com_rabbit.onGoodService();
					}
				}
				this.moveUp(result);
			});
		}
	},

	update(dt) { },

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
				//cc.find("Canvas/UI/ui_play/mode_press").getComponent("Game_PlayModePress").init((score) => { cc.log("-.>>>> " + score) });
				//cc.find("Canvas/UI/ui_play/mode_click").getComponent("Game_PlayModeClick").init(5, (score) => { cc.log("-.>>>> " + score) });
				//cc.find("Canvas/UI/ui_play/mode_touch").getComponent("Game_PlayModeTouch").init((score) => { cc.log("-.>>>> " + score) });
				break;
			}
		}
	},
});
