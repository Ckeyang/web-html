/**
 * Created by Administrator on 2017/2/14.
 */
define('ck_menu', ['jquery', 'ck_response', 'ck_exception'], function ($, response, exception) {
    var CONTOLSNAV = 'ck-controlsnav';
    var NAV = 'ck-nav';
    var navMenu = function (nid) {
        var that = this;
        /*that.OPTIONS = {
         menuId: ''
         };*/
        that.nav = null;
        response.setOnresizeListner(function () {
            that.checkWidth();
        });
        that.init = function (nid) {
            //  $.extend(that.OPTIONS, options || {});
            //  return that
            that.nav = $('[' + NAV + '=' + nid + ']');
            that.createListen(nid)
        };
        that.checkWidth = function () {
            var width = document.body.clientWidth;
            width < 786 ? that.menuHide(that.nav) : that.menuShow(that.nav)
        };
        that.menuHide = function (nav) {
            nav.hide();
        };
        that.menuShow = function (nav) {
            nav.show();
        };
        that.createListen = function (nid) {
            var nav = $('[' + NAV + '=' + nid + ']');
            $('[' + CONTOLSNAV + '=' + nid + ']').bind('click', function () {
                nav.is(':hidden') ? that.menuShow(nav) : that.menuHide(nav);
            });
        };
        that.init(nid);
    };
    var menuContorls = {
        nav: null,
        init: function () {
            var nid = $('[' + CONTOLSNAV + ']').attr(CONTOLSNAV) || null;
            var length = $('[' + CONTOLSNAV + ']').length;
            this.nav = nid;
            length < 2 ? this.createNavmenu(nid) : exception.throwException("此导航栏只能唯一");
        },
        createNavmenu: function (nid) {
            navMenu(nid)
        }
    };
    $.ready(menuContorls.init());
    return menuContorls;
});