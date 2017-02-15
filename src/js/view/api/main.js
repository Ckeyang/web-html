/**
 * Created by Administrator on 2017/2/14.
 */
require(['jquery', 'ck'], function ($, ck) {
    var popup = ck.popup({clazz: 'ck_popup', popupName: 'test1'});
    var minPopup = ck.popup({clazz: 'ck_min_popup', popupName: 'test2'});
    var sss = ck.popup({clazz: 'sss', popupName: 'ss'});
    var testmenu = ck.menu({menuId: 'testMenu'});
    console.log(testmenu);
    $('.ck_nav_menu_btn').bind('click', function () {
        testmenu.click();
    });
    $('#testPopup').bind('click', function () {
        popup.click();
    });
    $('#testPopupmin').bind('click', function () {
        minPopup.click();
    });
});