/**
 * Created by Administrator on 2017/2/15.
 */
define('ck', ['ck_popup', 'ck_menu','ck_pagination'], function (ck_popup, ck_menu,ck_pagination) {
    var ck = {
        popup:ck_popup,
        menu: ck_menu,
        pagination:ck_pagination
    };
    return ck;
});