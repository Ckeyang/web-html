/**
 * Created by Administrator on 2017/2/14.
 */
require(['jquery', 'ck'], function ($, ck) {
    var dom =ck.pagination({
        totalCount: 23
    });
    $('.ck_pagination').html(dom);
});