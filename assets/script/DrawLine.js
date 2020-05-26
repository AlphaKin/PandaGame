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

    onLoad () {
        this._lastPos = cc.v2(0, 0);
        this._widthoff = cc.view.getVisibleSize().width/2;
        this._heightoff = cc.view.getVisibleSize().height/2;

        //事件监听
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

    },

    start () {
        this._pigmentManager = this.line_obj.getComponent("PigmentManager");
        this._pigmentManager.setPigmentType(2);
    },

    onTouchMove(event){
        let newPos = event.getLocation();
        let distance = newPos.sub(this._lastPos).mag();
        let gap = this._pigmentManager.gap;
        let num = parseInt(distance / gap);
        if(distance > gap){
            let dx = newPos.x - this._lastPos.x;
            let dy = newPos.y - this._lastPos.y;
            let dir = cc.v2(dx,dy);
            let angle = dir.signAngle(cc.v2(1,0));
            let degree = angle / Math.PI * 180;
            if(this.pigment_store > 0){
                let tmpPos = this._lastPos;
                let deltaX =  (newPos.x - this._lastPos.x) / distance * gap;
                let deltaY =  (newPos.y - this._lastPos.y) / distance * gap;
                for(let i=0; i<num; ++i){
                    tmpPos.x += deltaX;
                    tmpPos.y += deltaY;
                    this.makeNewPigment(tmpPos, Math.random()*360 - 180);
                    this.pigment_store--;
                }
                this._lastPos = tmpPos;
            }
        }
    },

    onTouchStart(event){
        let newPos = event.getLocation();
        this.clearPigments();
        this.pigment_store = 100;
        this.makeNewPigment(newPos, Math.random()*360 - 180);
        this._lastPos = newPos;
    },

    onTouchEnd(event){ },

    clearPigments(){
        this.line_obj.removeAllChildren();
    },

    makeNewPigment(locate, degree){
        let newPigment = this._pigmentManager.createPigment(locate, degree);
        newPigment.setPosition(this.node.convertToNodeSpaceAR(locate));
        
        // console.log(newPigment.getPosition());
        this.line_obj.addChild(newPigment);
        newPigment.angle = -(degree-90);
    },
    update (dt) {
    },
});

module.exports = DrawLine;