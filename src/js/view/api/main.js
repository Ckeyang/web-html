/**
 * Created by Administrator on 2017/2/14.
 */
require(['jquery', 'ck','foundation-datepicker'], function ($,ck) {
    /**
     ckPagination: null, //唯一
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
    /*window.setValue=function(target,val){ck.progress.getProgress(target).setValue(val)}*/
    $('#timepicker').fdatepicker({
        format: 'yyyy-mm-dd hh:ii'
    });
});