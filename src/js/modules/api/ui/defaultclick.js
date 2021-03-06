/**
 * Created by ckey on 2017/2/13.
 */
define('ck_defaultclick', ['jquery', 'ck_exception'], function ($, ck_exception) {
    var CONTOLSPOPUP = 'ck-controlsdefaultclick';
    var POPUP = 'ck-defaultclick';
    /**
     * 原型
     * @param pid
     */
    var defaultclick = function (pid) {
        /*this.OPTIONS = {
         clazz: 'ck_popup',
         popupName: 'ck_popup',
         callback: null
         };*/
        this.PPID = 0;
        this.popup = null;
        this.init = function (pid) {
            //    $.fn.extend(this.OPTIONS, options || {});
            this.PPID = pid;
            var flag = this._isPopup(pid);
            return flag ? this.createListen(pid) : null;
        };
        this._isPopup = function (pid) {
            //     var options = this.OPTIONS;
            var popup = $('[' + POPUP + '=' + pid) || null;
            this.popup = popup;
            return popup && popup.length == 1 || ck_exception.throwException("exception null")
        };
        this.createListen = function (pid) {
            return $('[' + CONTOLSPOPUP + '=' + pid + ']').bind('click', function () {
                var popup = $('[' + POPUP + '=' + pid + ']');
                popup.is(':hidden') ? _openPopup(popup) : _closePopup(popup)
            });
        };
        var _openPopup = function (popup) {
            popup.show();
        };
        var _closePopup = function (popup) {
            popup.hide();
        };
        return this.init(pid)
    };
    /**
     * 控制器
     * @type {{popupList: Array, init: init, _createPopup: _createPopup, getPopList: getPopList}}
     */
    var defaultclickControls = {
        _popupList: [],
        init: function () {
            var list = $('[' + CONTOLSPOPUP + ']');
            var length = list.length;
            for (var i = 0; i < length; i++) {
                var pid = $(list[i]).attr(CONTOLSPOPUP);
                this._popupList.push(pid);
                this._createPopup(pid);
            }
        },
        _createPopup: function (pid) {
            new defaultclick(pid);
        },
        getPopList: function () {
            return this._popupList;
        }
    };
    /**
     * 默认执行初始化
     */
    $.ready(defaultclickControls.init());
    /**
     * 返回控制器
     */
    return defaultclickControls;
});