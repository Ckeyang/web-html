/**
 * Created by Administrator on 2017/2/14.
 */
define('ck_menu',['jquery'],function($){
    var menu=function(options){
        this.OPTIONS={
            direction:'v',
            vclazz:'ck_vertical_menu',
            hclazz:'ck_horizontal_menu',
            data:null
        };
        this.init=function(options){
            $.extend(this.OPTIONS,options||{});
        };
        this._checkDirection=function(){
          var options=this.OPTIONS;
            options.direction=='v'?this._verticalMenu():options.direction=='h'?this._horizontalMenu():null
        };
        this._verticalMenu=function(){
            var data=this.OPTIONS.data;
            var ul=document.createElement('ul');

            var li=document.createElement('li');
        };
        this._horizontalMenu=function(){

        };
    }
});