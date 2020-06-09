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
        pass: cc.Prefab
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
        if(other.node.group == "ball"){
            this.boom();
        }
    },
    // onLoad () {},

    boom(){
        let pass = cc.instantiate(this.pass);
            cc.find("Canvas/blocks").addChild(pass)
            pass.setPosition(this.node.getPosition());

            let gm = cc.find("Canvas").getComponent("gameManager");
            gm.gamePause();
            gm.nextLevel();
            let x = this.node.getComponent("position").x;
            let y = this.node.getComponent("position").y;
            com.MAP_OBJ[x][y] = null;
            this.node.destroy();
    },

    start () {

    },

    // update (dt) {},
});
