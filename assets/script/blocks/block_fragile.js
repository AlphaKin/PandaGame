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

    onBeginContact(contact, self, other){
        if(other.node.group == "ball"){
            this.boom();
        }
    },
    boom(){
        // let part = cc.instantiate(this.parts);
        // cc.find("Canvas/blocks").addChild(part);
        // part.setPosition(this.node.getPosition());
        this.node.getChildByName("stone_part1").getComponent("block_parts").boom(-50);
        this.node.getChildByName("stone_part2").getComponent("block_parts").boom(0);
        this.node.getChildByName("stone_part3").getComponent("block_parts").boom(50);
        this.node.removeComponent(cc.RigidBody);
        // part.angle = Math.random()*360 - 180;
        // let rigidbody = part.getComponent(cc.RigidBody);
        // rigidbody.linearVelocity = cc.v2(10, 10);
        // this.node.destroy();
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        console.log("fragile");
    },

    // update (dt) {},
});
