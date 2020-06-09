// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var com = require('common');
cc.Class({
    extends: cc.Component,

    properties: {
        parts: cc.Prefab,
        audio: cc.AudioClip,
        _isContacted: true
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

    onBeginContact(contact, self, other){
        // let newBall = cc.instantiate(this.aim);
        // this.ballParent.addChild(newBall);
        if(this._isContacted && other.node.group == "ball"){
            this.boom();
            this._isContacted = false;
        }
    },
    boom(){
        let part = cc.instantiate(this.parts);
        cc.audioEngine.play(this.audio, false, 1);
        let x = this.node.getComponent("position").x;
        let y = this.node.getComponent("position").y;
        com.MAP_OBJ[x][y] = part;
        let bp = part.getComponent("position");
        bp.x = this.node.getComponent("position").x; bp.y = this.node.getComponent("position").y;
        cc.find("Canvas/blocks").addChild(part);
        part.setPosition(this.node.getPosition());
        // part.angle = Math.random()*360 - 180;
        // let rigidbody = part.getComponent(cc.RigidBody);
        // rigidbody.linearVelocity = cc.v2(10, 10);
        this.node.destroy();
    },
    start () {
    },

    // update (dt) {},
});
