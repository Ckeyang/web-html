/**
 * Created by Administrator on 2017/2/14.
 */
define('ck_menu', ['jquery', 'ck_response'], function ($, response) {
    var menu = function (options) {
        var that = this;
        that.OPTIONS = {
            menuId: ''
        };
        response.setOnresizeListner(function () {
            that.checkWidth();
        });
        that.init=function(options){
            $.extend(that.OPTIONS,options||{});
            return that
        };
        that.checkWidth = function () {
            var width = document.body.clientWidth;
            width < 786 ? that.menuHide() : that.menuShow()
        };
        that.menuHide = function () {
            var options = this.OPTIONS;
            $('#' + options.menuId).hide();
        };
        that.menuShow = function () {
            var options = this.OPTIONS;
            $('#' + options.menuId).show();
        };
        that.click = function () {
            $('#' + options.menuId).is(':hidden') ? that.menuShow() : that.menuHide();
        };
        that.init(options);
    };
    return menu;
});