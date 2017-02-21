/**
 * Created by Administrator on 2017/2/16.
 */
define('ck_pagination', ['jquery', 'ck_exception'], function ($, exception) {
    /**
     * 分页
     * @type {{that: *, PAGINATION: string, OPTIONS: {ckPagination: null, totalCount: number, size: number, beforePageText: string, beforePageNum: number, nextPageText: string, nextPageNum: number, pageClick: pageClick}, choosePage: number, totalPage: number, init: init, _addDomToTarget: _addDomToTarget, _checkPagination: _checkPagination, _getTotalPage: _getTotalPage, _createDom: _createDom, _createLi: _createLi, _createListener: _createListener, _activityPage: _activityPage}}
     */
    var pagination = function (options) {
        var that = this;
        this.PAGINATION = 'ck-pagination';
        this.OPTIONS = {
            ckPagination: null,
            totalCount: 0,
            size: 5,
            showLength: 10,
            beforePageText: '<',
            beforePageNum: -1,
            nextPageText: '>',
            nextPageNum: -2,
            nowPage: 1,
            pageClick: function (num) {
                console.log(num);
            }
        };
        this.choosePage = 1;
        this.totalPage = 0;
        /**
         * 初始化
         * @param options
         * @returns {*}
         */
        this.init = function (options) {
            $.extend(that.OPTIONS, options || {});
            that.totalPage = that._getTotalPage();
            that.choosePage = that.OPTIONS.nowPage;
            var flag = that._checkPagination();
            if (!flag) {
                exception.throwException("必须配置ckPagination!");
                return false;
            }
            that._doFlow();
            return that;
        };
        /**
         * 执行流程
         * @private
         */
        this._doFlow = function () {
            var dom = that._createDom();
            that._addDomToTarget(dom);
            that._activityPage(that.choosePage);
            that._createListener();
        };
        /**
         * 添加dom到目标点
         * @param dom
         * @private
         */
        this._addDomToTarget = function (dom) {
            var ckPagination = that.OPTIONS.ckPagination;
            $('[' + that.PAGINATION + '=' + ckPagination + ']').html(dom);
        }
        /**
         * 检查ckPagination是否为null
         * @private
         */
        this._checkPagination = function () {
            var ckPagination = that.OPTIONS.ckPagination;
            return ckPagination ? ckPagination : false;
        };
        /**
         * 获取总页数
         * @returns {number}
         * @private
         */
        this._getTotalPage = function () {
            var count = that.OPTIONS.totalCount;
            var size = that.OPTIONS.size;
            return Math.ceil(count / size)
        };
        /**
         * 创建dom  showLength
         * @returns {*}
         * @private
         */
        this._createDom = function () {
            var totalPage = that.totalPage;
            if (totalPage != null) {
                var dom = that._createLi(that.OPTIONS.beforePageNum);
                var total = parseInt(that.totalPage);
                var choosePage = parseInt(that.choosePage);
                var showLength = parseInt(that.OPTIONS.showLength);
                /**
                 * 当总页数 小于 需要显示的页数
                 */
                if (total <= showLength) {
                    for (var i = 0; i < totalPage; i++) {
                        dom += that._createLi(i + 1);
                    }
                } else {
                    if (choosePage < Math.ceil(showLength / 2) + 1) {
                        for (var i = 0; i < showLength; i++) {
                            dom += that._createLi(i + 1);
                        }
                    } else if (totalPage - choosePage < Math.ceil(showLength / 2) + 1) {
                        for (var i = totalPage - showLength; i < totalPage; i++) {
                            dom += that._createLi(i + 1);
                        }
                    } else {
                        for (var i = choosePage - Math.ceil(showLength / 2); i < choosePage + Math.ceil(showLength / 2); i++) {
                            dom += that._createLi(i + 1);
                        }
                    }
                }
                dom += that._createLi(that.OPTIONS.nextPageNum);
                return dom;
            } else {
                exception.throwException("必须配置totalCount");
                return false
            }
        };
        /**
         * 创建li
         * @param num
         * @returns {string}
         * @private
         */
        this._createLi = function (num) {
            var options = that.OPTIONS;
            strnum = num == options.beforePageNum ? options.beforePageText : num == options.nextPageNum ? options.nextPageText : num;
            var dom = "<li><a href='#' ck-page='" + num + "' >" + strnum + "</a></li>";
            return dom;
        };
        /**
         * 创建监听,绑定 click 事件
         * @private
         */
        this._createListener = function () {
            $('[ck-page]').bind('click', function (e) {
                var num = $(e.target).attr('ck-page');
                var choosePage = parseInt(that.choosePage);
                var totalPage = parseInt(that.totalPage);
                choosePage = num > 0 ? num : num == that.OPTIONS.beforePageNum ?
                        choosePage - 1 : num == that.OPTIONS.nextPageNum ? choosePage + 1 : exception.throwException("数据异常");
                choosePage = choosePage < 1 ? choosePage + 1 : choosePage > totalPage
                        ? choosePage - 1 : choosePage;
                that.choosePage = choosePage;
                that._activityPage(that.choosePage);
                that._doFlow();
                that.OPTIONS.pageClick(that.choosePage);
            });
        };
        /**
         * 设置选中page
         * @param page
         * @private
         */
        this._activityPage = function (page) {
            $('[ck-page=' + page + ']').parent().addClass('ck_active').siblings().removeClass('ck_active');
        };
        /**
         * 返回当前页
         * @returns {number}
         */
        this.getNowPage = function () {
            return that.choosePage
        };
        /**
         * 返回总页
         * @returns {number}
         */
        this.getTotalPage = function () {
            return that.totalPage
        };
        this.init(options);
    };
    return pagination;
});