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
    $('#timepicker2').fdatepicker();
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    var checkin = $('#timepicker3').fdatepicker({
        onRender: function (date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function (ev) {
        if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.update(newDate);
        }
        checkin.hide();
        $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#timepicker4').fdatepicker({
        onRender: function (date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function (ev) {
        checkout.hide();
    }).data('datepicker');
});