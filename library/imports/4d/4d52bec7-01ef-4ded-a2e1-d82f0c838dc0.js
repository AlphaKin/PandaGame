"use strict";
cc._RF.push(module, '4d52b7HAe9N7aLh2C8Mg43A', 'poisonStele');
// script/stele/poisonStele.js

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
        attack_obj: cc.Prefab,
        attack_rate: 300,
        canvas: cc.Node,
        _lasttime: 0
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
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    createAttackObj: function createAttackObj() {
        var _this = this;

        var chin = this.node.getChildByName("sx_chin");
        setTimeout(function () {
            chin.setPosition(chin.getPosition().x, chin.getPosition().y - 18);
            var obj = cc.instantiate(_this.attack_obj);
            _this.canvas.addChild(obj);
            obj.setPosition(cc.v2(_this.node.getPosition().x, _this.node.getPosition().y + 25));
            setTimeout(function () {
                chin.setPosition(chin.getPosition().x, chin.getPosition().y + 18);
            }, 1000);
        }, 1000);
    },
    start: function start() {
        this._lasttime = 0;
    },
    update: function update(dt) {
        if (this._lasttime >= this.attack_rate) {
            this.createAttackObj();
            this._lasttime = 0;
        }
        this._lasttime += 1;
    }
});

cc._RF.pop();