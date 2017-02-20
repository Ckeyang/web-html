/**
 * Created by Administrator on 2017/2/14.
 */
require(['jquery', 'ck', 'ck_template'], function ($, ck, template) {
    /**
     *  ckPagination: null, //唯一
     totalCount: 0,
     size: 5,
     showLength: 10,
     beforePageText: '<',
     beforePageNum: -1,
     nextPageText: '>',
     nextPageNum: -2,
     nowPage: 1,
     pageClick: function (num) {
                console.log(num)
        }
     */
    var pagination = new ck.pagination({ckPagination: 'pagination', totalCount: 120, size: 2, nowPage: 10});
    template({model: 'template', data: {name: 'ck', age: 23}});
});