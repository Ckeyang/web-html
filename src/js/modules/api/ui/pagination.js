/**
 * Created by Administrator on 2017/2/16.
 */
define('ck_pagination', ['jquery', 'ck_exception'], function ($, exception) {
    /**
     * pagination
     * @type {{that: *, OPTIONS: {totalCount: number, size: number, beforePageText: string, beforePageNum: number, nextPageText: string, nextPageNum: number, pageClick: pageClick}, choosePage: number, totalPage: number, init: init, _getTotalPage: _getTotalPage, _createDom: _createDom, _createLi: _createLi, _createListener: _createListener, _activityPage: _activityPage}}
     */
    var pagination = {
        that: this,
        PAGINATION:'ck-pagination',
        OPTIONS: {
            ckPagination: null,
            totalCount: 0,
            size: 5,
            beforePageText: '<',
            beforePageNum: -1,
            nextPageText: '>',
            nextPageNum: -2,
            pageClick: function (num) {
                console.log(num)
            }
        },
        choosePage: 1,
        totalPage: 0,
        /**
         * 初始化
         * @param options
         * @returns {*}
         */
        init: function (options) {
            $.extend(pagination.OPTIONS, options || {});
            pagination.totalPage = pagination._getTotalPage();
            var flag = pagination._checkPagination();
            if (!flag) {
                exception.throwException("必须配置ckPagination!");
                return false;
            }
            var dom = pagination._createDom();
            pagination._addDomToTarget(dom);
            pagination._activityPage(pagination.choosePage);
            return pagination;
        },
        /**
         * 添加dom到目标点
         * @param dom
         * @private
         */
        _addDomToTarget: function (dom) {
            var ckPagination = pagination.OPTIONS.ckPagination;
            $('[' + pagination.PAGINATION + '='+ckPagination+']').html(dom);
        },
        /**
         * 检查ckPagination是否为null
         * @private
         */
        _checkPagination: function () {
            var ckPagination = pagination.OPTIONS.ckPagination;
            return ckPagination ? ckPagination : false;
        },
        /**
         * 获取总页数
         * @returns {number}
         * @private
         */
        _getTotalPage: function () {
            var count = pagination.OPTIONS.totalCount;
            var size = pagination.OPTIONS.size;
            return Math.ceil(count / size)
        },
        /**
         * 创建dom
         * @returns {*}
         * @private
         */
        _createDom: function () {
            var totalPage = pagination.totalPage;
            if (totalPage != null) {
                var dom = pagination._createLi(pagination.OPTIONS.beforePageNum);
                for (var i = 0; i < totalPage; i++) {
                    dom += pagination._createLi(i + 1);
                }
                dom += pagination._createLi(pagination.OPTIONS.nextPageNum);
                this._createListener();
                return dom;
            } else {
                exception.throwException("必须配置totalCount");
                return false
            }
        },
        /**
         * 创建li
         * @param num
         * @returns {string}
         * @private
         */
        _createLi: function (num) {
            var options = pagination.OPTIONS;
            strnum = num == options.beforePageNum ? options.beforePageText : num == options.nextPageNum ? options.nextPageText : num;
            var dom = "<li><a href='#' ck-page='" + num + "' onclick='ckGetPagination(" + num + ")'>" + strnum + "</a></li>";
            return dom;
        },
        /**
         * 创建监听
         * @private
         */
        _createListener: function () {
            window.ckGetPagination = function (num) {
                pagination.choosePage = num > 0 ? num : num == pagination.OPTIONS.beforePageNum ?
                        pagination.choosePage - 1 : num == pagination.OPTIONS.nextPageNum ? pagination.choosePage + 1 : exception.throwException("数据异常");
                pagination.choosePage = pagination.choosePage < 1 ? pagination.choosePage + 1 : pagination.choosePage > pagination._getTotalPage()
                        ? pagination.choosePage - 1 : pagination.choosePage;
                pagination._activityPage(pagination.choosePage);
                pagination.OPTIONS.pageClick(pagination.choosePage);
            }
        },
        /**
         * 设置选中page
         * @param page
         * @private
         */
        _activityPage: function (page) {
            $('[ck-page=' + page + ']').parent().addClass('ck_active').siblings().removeClass('ck_active');
        }
    };
    return pagination.init;
});