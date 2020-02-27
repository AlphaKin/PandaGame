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
        pigments: [cc.Prefab],
        gap: 30,
        _nowPigmentIndex: 0
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

    start () {

    },
    setPigmentType(type){
        this._nowPigmentIndex = type;
    },
    createPigment(locate, degree){
        switch(this._nowPigmentIndex){
            //bamboo
            case 0:
                let bambooPigment = cc.instantiate(this.pigments[0]);
                this.gap = 30;
                let randomVal = Math.floor(Math.random() * 10);
                if(randomVal%3==0){
                    bambooPigment.getChildByName("bamboo_leaf_a").active = (randomVal&1);
                    bambooPigment.getChildByName("bamboo_leaf_b").active = !(randomVal&1);
                }
                return bambooPigment;
            //woodcircle
            case 1:
                let woodcirclePigment = cc.instantiate(this.pigments[1]);
                this.gap = 25;
                return woodcirclePigment;
            case 2:
                let basePigment = cc.instantiate(this.pigments[2]);
                this.gap = 8;
                return basePigment;
        }
    },

    // update (dt) {
        
    // },
});
