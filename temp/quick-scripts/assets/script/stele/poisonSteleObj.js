(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/stele/poisonSteleObj.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '53834dhYRtGr5YMntzCL9wZ', 'poisonSteleObj', __filename);
// script/stele/poisonSteleObj.js

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
        effect: cc.Prefab,
        _speed: 5,
        _dir: cc.v2,
        _aim: cc.Node,
        _isBoom: false
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

    onLoad: function onLoad() {},
    onBeginContact: function onBeginContact(contact, self, other) {
        if (this._isBoom == false) {
            var eff = cc.instantiate(this.effect);
            cc.find("Canvas").addChild(eff);
            eff.setPosition(this.node.getPosition());
            eff.angle = Math.random() * 360 - 180;
            this.node.destroy();
            this._isBoom = true;
        }
    },
    start: function start() {
        this._aim = cc.find("Canvas/Ball/Charactor");
        // console.log(typeof(this._aim));
        var dx = this._aim.getPosition().x - this.node.getPosition().x;
        var dy = this._aim.getPosition().y - this.node.getPosition().y;
        var vector = cc.v2(dx, dy);
        this._dir = cc.v2(vector.x / vector.mag() * this._speed, vector.y / vector.mag() * this._speed);

        var dir = cc.v2(dx, dy);
        var angle = dir.signAngle(cc.v2(1, 0));
        var degree = angle / Math.PI * 180;
        this.node.angle = -(degree - 90);
        // console.log(vector);
    },
    update: function update(dt) {
        this.node.setPosition(this.node.getPosition().x + this._dir.x, this.node.getPosition().y + this._dir.y);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=poisonSteleObj.js.map
        