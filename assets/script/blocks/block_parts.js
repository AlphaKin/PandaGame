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
        isBoom: false,
        _rigidbody: cc.Component
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

    
    onLoad () {
        // cc.director.getPhysicsManager().enabled = true; // 开启了物理引擎
//         cc.director.getPhysicsManager().gravity = cc.v2(0, -320);// 重力加速度的配置
        this._rigidbody = this.node.getComponent(cc.RigidBody);
    },
    boom(offest){
        console.log("boom");
        this._rigidbody.linearVelocity = cc.v2(offest, 200);
        this.isBoom = true;
    },
    start () {
        
    },

    update (dt) {
        if(this.isBoom){
            this._rigidbody.linearVelocity = cc.v2(this._rigidbody.linearVelocity.x, this._rigidbody.linearVelocity.y - 10);
            if(this.node.opacity > 0) this.node.opacity-=2;
            else this.node.destroy();
        }
    },
});
