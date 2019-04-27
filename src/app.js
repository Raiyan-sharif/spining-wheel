/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var menuItem;
var sprite;
var sprite_action;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    o:0,
    time:new Date(),
    curScore:0,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        sprite = cc.Sprite.create(res.spiningWheel_png);
        sprite.setAnchorPoint(cc.p(0.5,0.5));
        sprite.setPosition(cc.p(size.width/2, size.height /2));
        this.addChild(sprite, 0);

        var sprite2 = cc.Sprite.create(res.downarrow_png);
        sprite2.setAnchorPoint(cc.p(0.5,0.5));
        sprite2.setPosition(cc.p(size.width/2, size.height/1.4));
        this.addChild(sprite2, 0);

        var playAgainBtnItem1 = new cc.MenuItemFont("PlayAgain", playAgainfunc);
        playAgainBtnItem1.setPosition(cc.p(size.width/8, size.height/1.3))
        var playAgainBtn = cc.Menu.create(playAgainBtnItem1);
        playAgainBtn.setPosition(0,0);
        this.addChild(playAgainBtn);

        // var button = new ccui.Button();
        // button.setTitleText("Play Again");
        // button.x = size.width/8;
        // button.y = size.height/1.3;
        // button.addTouchEventListener(this.touchEvent, this);
        // this.addChild(button);


        // var sprite_action = cc.MoveTo.create(2, cc.p(600,500));
        // var sprite_action = cc.MoveBy.create(2, cc.p(150,100));
        // sprite.runAction(sprite_action);
        // var sprite_action = cc.JumpTo.create(2,cc.p(100,200),50,4);
        // sprite.runAction(sprite_action);
        var out = Math.floor(Math.random() * 6 ) + 20;
        this.o = this.o + out;

        
        // var repeat_action = cc.Repeat.create(sprite_action, 0);
        // for(i=1;i<=out;i++){
        sprite_action = cc.RotateBy.create(2,60*this.o);
        sprite.runAction(sprite_action);
        // }
           
        // var repeat_action = cc.Repeat.create(sprite_action, out);
        
        
        // if(out%6 == 1){
        //     alert(10);
        // }
        // else if(out%6 == 2){
        //     alert(20);
        // }
        // else if(out%6 == 3){
        //     alert(30);
        // }
        // else if(out%6 == 4){
        //     alert(40);
        // }
        // else if(out%6 == 5){
        //     alert(50);
        // }
        // else if(out%6 == 0){
        //     alert(60);
        // }
        // else{
        //   alert(out);
        // }
        // alert(out);
        var today = new Date();
        this.time = today;
        menuItem = new cc.LabelTTF("Score : 00" ,"Arial");
        menuItem.setFontSize(40);
        menuItem.setPosition(cc.p(size.width/8, size.height/1.2));
        // var menu = new cc.Menu(menuItem);
        // menu.setPosition(cc.p(0,0));
        this.addChild(menuItem);


        this.scheduleUpdate(this.update);
        
        // sprite.runAction(sprite_action);
     
        // var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
     
        // helloLabel.x = size.width / 2;
        // helloLabel.y = size.height / 2 + 200;
      
        // this.addChild(helloLabel, 5);

     
        // this.sprite = new cc.Sprite(res.HelloWorld_png);
        // this.sprite.attr({
        //     x: size.width / 2,
        //     y: size.height / 2
        // });
        // this.addChild(this.sprite, 0);

        return true;
    },
    update:function(dt){
        t = new Date();

        console.log(t - this.time)

        if ((t - this.time >= 2000) && (t - this.time <= 2070) ){
            var size = cc.winSize;
            
            // if(this.o%6 == 1){
            //     alert(10);
            // }
            // else if(this.o%6 == 2){
            //     alert(20);
            // }
            // else if(this.o%6 == 3){
            //     alert(30);
            // }
            // else if(this.o%6 == 4){
            //     alert(40);
            // }
            // else if(this.o%6 == 5){
            //     alert(50);
            // }
            if(this.o%6 == 0){
                // alert(60);
                // this.curScore=60;
                //now
                // var menuItem = new cc.MenuItemFont(" " + 60);
            // menuItem.setPosition(cc.p(size.width/6, size.height/10))
            // var menu = new cc.Menu(menuItem);
            // menu.setPosition(cc.p(0,0));
            // this.addChild(menu);
            menuItem.setString("Score : "+ 60);
            // menuItem.setPosition(cc.p(size.width/8, size.height/10));
            }
            else{
                // alert((this.o%6)*10);
                // this.setFontName((this.o%6)*10);
                // this.curScore = (this.o%6)*10;
                menuItem.setString("Score : "+ (this.o%6)*10);
                // menuItem.setPosition(cc.p(size.width/8, size.height/10));
            // menuItem = new cc.MenuItemFont(" " +  (this.o%6)*10);
            // menuItem.setPosition(cc.p(size.width/6, size.height/10))
            // var menu = new cc.Menu(menuItem);
            // menu.setPosition(cc.p(0,0));
            // this.addChild(menu);
            }

        }
        
        // if(dt>=2.0){
        //     if(this.o%6 == 1){
        //         alert(10);
        //     }
        //     else if(this.o%6 == 2){
        //         alert(20);
        //     }
        //     else if(this.o%6 == 3){
        //         alert(30);
        //     }
        //     else if(this.o%6 == 4){
        //         alert(40);
        //     }
        //     else if(this.o%6 == 5){
        //         alert(50);
        //     }
        //     else if(this.o%6 == 0){
        //         alert(60);
        //     }
        //     else{
        //         alert(out);
        //     }

        // }
    }
});
var playAgainfunc = function()
{
    sprite_action = cc.RotateBy.create(2,60*this.o);
    sprite.runAction(sprite_action);
    // alert(this.o);
    cc.director.runScene(new HelloWorldScene());
    // alert(this.o);
    cc.log("playAgainfunc");
}
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

