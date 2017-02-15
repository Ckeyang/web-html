/**
 * Created by Administrator on 2017/2/15.
 */
define('ck', ['ck_popup', 'ck_menu'], function (ck_popup, ck_menu) {
    var ck = {
        popup: function (options) {
            return new ck_popup(options)
        },
        menu: function (options) {
            return new ck_menu(options);
        }
    };
    return ck;
});