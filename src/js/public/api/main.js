/**
 * Created by Administrator on 2017/2/14.
 */
require(['jquery', 'ck_popup'], function ($, Popup) {
    var popup = new Popup({clazz: 'ck_popup', popupName: 'test1'});
    var minPopup = new Popup({clazz: 'ck_min_popup', popupName: 'test2'});
    var sss = new Popup({clazz: 'sss', popupName: 'ss'});

    $('#testPopup').bind('click', function () {
        popup.click();
    });
    $('#testPopupmin').bind('click', function () {
        minPopup.click();
    });
});