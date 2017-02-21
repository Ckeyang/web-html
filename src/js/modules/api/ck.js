/**
 * Created by Administrator on 2017/2/15.
 */
define('ck', ['ck_defaultclick', 'ck_menu', 'ck_pagination', 'ck_progress'], function (ck_defaultclick, ck_menu, ck_pagination, ck_progress) {
    var ck = {
        defaultClick: ck_defaultclick,
        menu: ck_menu,
        pagination: ck_pagination,
        progress: ck_progress
    };
    return ck;
});