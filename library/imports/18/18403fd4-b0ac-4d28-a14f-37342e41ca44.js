"use strict";
cc._RF.push(module, '18403/UsKxNKKFPNzQuQcpE', 'CharactorBase');
// script/CharactorBase.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        gravity: cc.v2(0, -320), // 系统默认的
        effect: cc.Node,
        _speed: 10,
        _rididbody: null,
        _contactGap: 10
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },s
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:
    onBeginContact: function onBeginContact(contact, self, other) {
        var selfPos = self.node.getPosition(),
            othPos = other.node.getPosition();
        var f = [1, 1];
        var tmpx = selfPos.x - othPos.x,
            tmpy = selfPos.y - othPos.y;
        f[0] = tmpx < 0 ? -1 : 1, f[1] = tmpy < 0 ? -1 : 1;
        var dir = cc.v2(tmpx = Math.abs(tmpx), tmpy = Math.abs(tmpy));
        dir = cc.v2(tmpx / dir.mag() * f[0] * 14 * this._speed, tmpy / dir.mag() * f[1] * 14 * this._speed);
        this._rigidbody.linearVelocity = dir;
    },
    onLoad: function onLoad() {
        cc.director.getPhysicsManager().enabled = true; // 开启了物理引擎
        cc.director.getPhysicsManager().gravity = this.gravity; // 重力加速度的配置
        this._rigidbody = this.node.getComponent(cc.RigidBody);
        // var velocity = this._rigidbody;
        // velocity.linearVelocity.x = 0;
        // velocity.linearVelocity.y = 0;
        // this._rigidbody = velocity;
    },
    start: function start() {},
    update: function update(dt) {
        if (this.node.angle > 180) this.node.angle = -180;
        // if(this._contactGap < 1) ++this._contactGap;
        var speedVal = 0.5 * this._speed;
        this.node.angle = this.node.angle + speedVal;
        this.effect.setPosition(this.node.getPosition());
    }
});

cc._RF.pop();