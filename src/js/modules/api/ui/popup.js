/**
 * Created by ckey on 2017/2/13.
 */
define('ck_popup', ['jquery', 'ck_exception'], function ($, ck_exception) {
    var popup = function (options) {
        this.OPTIONS = {
            clazz: 'ck_popup',
            popupName: 'ck_popup',
            callback: null
        };
        this.init = function (options) {
            $.fn.extend(this.OPTIONS, options || {});
            var flag = this._isPopup();
            return flag ? this : null;
        };
        this._isPopup = function () {
            var options = this.OPTIONS;
            var popup = $('.' + options.clazz + '[popupName=' + options.popupName) || null;
            return popup && popup.length == 1 || ck_exception.throwException("exception null")
        };
        this._checkPopup = function () {
            var options = this.OPTIONS;
            var popup = $('.' + options.clazz + '[popupName=' + options.popupName) || null;
            popup.is(':hidden') ? this._openPopup(popup) : this._closePopup(popup)
        };
        this._openPopup = function (popup) {
            popup.show();
        };
        this._closePopup = function (popup) {
            popup.hide();
        };
        /**
         * 监听点击事件
         */
        this.click = function () {
            this._checkPopup();
        };
        return this.init(options)
    };
    return popup;
});