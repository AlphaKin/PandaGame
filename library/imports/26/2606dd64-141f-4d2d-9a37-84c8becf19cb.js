"use strict";
cc._RF.push(module, '2606d1kFB9NLZo3hMi+zxnL', 'DrawLine');
// script/DrawLine.js

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

var DrawLine = cc.Class({
    extends: cc.Component,

    properties: {
        line_obj: cc.Node,
        pigment_store: 0,
        _gap: 30,
        _pigmentManager: null
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

    onLoad: function onLoad() {
        this._lastPos = cc.v2(0, 0);
        this._widthoff = cc.view.getVisibleSize().width / 2;
        this._heightoff = cc.view.getVisibleSize().height / 2;

        //事件监听
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    },
    start: function start() {
        this._pigmentManager = this.line_obj.getComponent("PigmentManager");
        this._pigmentManager.setPigmentType(2);
    },
    onTouchMove: function onTouchMove(event) {
        var newPos = event.getLocation();
        var distance = newPos.sub(this._lastPos).mag();
        var gap = this._pigmentManager.gap;
        var num = parseInt(distance / gap);
        if (distance > gap) {
            var dx = newPos.x - this._lastPos.x;
            var dy = newPos.y - this._lastPos.y;
            var dir = cc.v2(dx, dy);
            var angle = dir.signAngle(cc.v2(1, 0));
            var degree = angle / Math.PI * 180;
            if (this.pigment_store > 0) {
                var tmpPos = this._lastPos;
                var deltaX = (newPos.x - this._lastPos.x) / distance * gap;
                var deltaY = (newPos.y - this._lastPos.y) / distance * gap;
                for (var i = 0; i < num; ++i) {
                    tmpPos.x += deltaX;
                    tmpPos.y += deltaY;
                    this.makeNewPigment(tmpPos, Math.random() * 360 - 180);
                    this.pigment_store--;
                }
                this._lastPos = tmpPos;
            }
        }
    },
    onTouchStart: function onTouchStart(event) {
        var newPos = event.getLocation();
        this.clearPigments();
        this.pigment_store = 100;
        this.makeNewPigment(newPos, Math.random() * 360 - 180);
        this._lastPos = newPos;
    },
    onTouchEnd: function onTouchEnd(event) {},
    clearPigments: function clearPigments() {
        this.line_obj.removeAllChildren();
    },
    makeNewPigment: function makeNewPigment(locate, degree) {
        var newPigment = this._pigmentManager.createPigment(locate, degree);
        newPigment.setPosition(this.node.convertToNodeSpaceAR(locate));

        // console.log(newPigment.getPosition());
        this.line_obj.addChild(newPigment);
        newPigment.angle = -(degree - 90);
    },
    update: function update(dt) {}
});

module.exports = DrawLine;

cc._RF.pop();