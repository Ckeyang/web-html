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
        that.controlsNav = null;
        response.setOnresizeListner(function () {
            that.checkWidth();
        });
        that.init = function (nid) {
            //  $.extend(that.OPTIONS, options || {});
            //  return that
            that.nav = $('[' + NAV + '=' + nid + ']');
            that.controlsNav = $('[' + CONTOLSNAV + '=' + nid + ']');
            that.createListen()
        };
        that.checkWidth = function () {
            var width = document.body.clientWidth;
            width < 786 ? menuHide(that.nav) : menuShow(that.nav)
        };
        that.createListen = function () {
            var nav = that.nav;
            that.controlsNav.bind('click', function () {
                nav.is(':hidden') ? menuShow(nav) : menuHide(nav);
            });
        };
        that.init(nid);
    };
    var subNav = function (subid) {
        var that = this;
        that.subNav = null;
        that.controlsSubNav = null;
        that.init = function (subid) {
            that.subNav = $('[' + SUBNAV + '=' + subid + ']');
            that.controlsSubNav = $('[' + CONTOLSSUBNAV + '=' + subid + ']');
            that.createListen();
        };
        that.createListen = function () {
            var subnav = that.subNav;
            that.controlsSubNav.bind('click', function () {
                subnav.is(':hidden') ? menuShow(subnav) : menuHide(subnav);
            })
        };
        that.init(subid);
    };
    var menuHide = function (nav) {
        nav.hide();
    };
    var menuShow = function (nav) {
        nav.show();
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