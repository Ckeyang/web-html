/**
 * Created by Administrator on 2017/2/16.
 */
define('ck_pagination', ['jquery', 'ck_exception'], function ($, exception) {
    var pagination = {
        that: this,
        OPTIONS: {
            totalCount: 0,
            size: 5,
            beforePageText: '<',
            nextPageText: '>',
            pageClick: function (num) {
                console.log(num)
            }
        },
        choosePage: 1,
        totalPage: 0,
        init: function (options) {
            $.extend(pagination.OPTIONS, options || {});
            pagination.totalPage = pagination._getTotalPage();
            var dom = pagination._createDom();
            return dom;
        },
        _getTotalPage: function () {
            var count = pagination.OPTIONS.totalCount;
            var size = pagination.OPTIONS.size;
            return Math.ceil(count / size)
        },
        _createDom: function () {
            var totalPage = pagination.totalPage;
            if (totalPage != null) {
                var dom = pagination._createLi(pagination.OPTIONS.beforePageText);
                for (var i = 0; i < totalPage; i++) {
                    dom += pagination._createLi(i + 1);
                }
                dom += pagination._createLi(pagination.OPTIONS.nextPageText);
                this._createListener();
                return dom;
            } else {
                exception.throwException("必须配置totalCount");
                return false
            }
        },
        _createLi: function (num) {
            var dom = "<li><a href='#' onclick='ckGetPagination(" + num + ")'>" + num + "</a></li>";
            return dom;
        },
        _createListener: function () {
            window.ckGetPagination = function (num) {
                pagination.choosePage =typeof num=='number'?num:num==pagination.OPTIONS.beforePageText?
                pagination.choosePage-1:num==pagination.OPTIONS.nextPageText?pagination+1:exception.throwException("数据异常");
                pagination.OPTIONS.pageClick(pagination.choosePage);
            }
        }
    };
    return pagination.init;
});