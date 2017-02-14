/**
 * Created by Administrator on 2017/2/13.
 */
/*define('popup', ['jquery'], function ($) {

 });*/
(function ($) {
    $.fn.ckPopup = function (clazz, popupName, callback) {
        var that = this;
        var clazz = clazz || 'ck_popup';
        var popupName = popupName || 'popup';
        var callback = callback || null;
        /**
         * 打开Popup
         */
        var openPopup = function () {
            $('.' + that.clazz + '[popupName=' + popupName + ']').show();
            return that
        };
        var cancelPopup = function () {
            $('.' + that.clazz + '[popupName=' + popupName + ']').hide();
            return that
        };
    };
})(jQuery);