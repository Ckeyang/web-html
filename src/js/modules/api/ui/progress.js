/**
 * Created by intel on 2017/2/21.
 */
define('ck_progress', ['jquery', 'ck_exception'], function ($, exception) {
    var CKPROGRESS = 'ck-progress';
    var CKCONTROLSPROGRESS = 'ck-controlsprogress';
    var progressValue = 'progressValue';
    var progressMax = 'progressMax';
    var progress = function (gid) {
        var that = this;
        that.OPTIONS = {
            max: 100,
            value: 60
        };
        that.$progressControls = null;
        that.$targetProgress = null;
        that.percent = null;
        that.init = function (gid) {
            that.$progressControls = $('[' + CKCONTROLSPROGRESS + '=' + gid + ']');
            that.$targetProgress = $('[' + CKPROGRESS + '=' + gid + ']');
            var options = that.getOptions();
            $.extend(that.OPTIONS, options || {});
            that.percent = that.countPercent();
            return that.createProgress();
        };
        that.getOptions = function () {
            var options = {};
            that.$targetProgress.attr(progressValue) ? options.value = that.$targetProgress.attr(progressValue) : null;
            that.$progressControls.attr(progressMax) ? options.max = that.$progressControls.attr(progressMax) : null;
            var flag = options.value / options.max < 1 ? true : exception.throwException("value大于max了！不好意思不支持!");
            return flag ? options : null;
        };
        that.countPercent = function () {
            var max = that.OPTIONS.max;
            var value = that.OPTIONS.value;
            return Math.ceil((value / max) * 100);
        };
        that.createProgress = function () {
            var percent = that.percent;
            that.$targetProgress.css({width: percent + "%", height: '100%', 'border-radius': '6px'});
            return that;
        };
        that.setValue = function (val) {
            that.OPTIONS.value = val;
            that.percent = that.countPercent();
            that.createProgress();
        };
        return that.init(gid);
    };
    var progressController = {
        _progressList: [],
        init: function () {
            var list = $('[' + CKCONTROLSPROGRESS + ']');
            var length = list.length;
            for (var i = 0; i < length; i++) {
                var gid = $(list[i]).attr(CKCONTROLSPROGRESS);
                var obj = this._createProgress(gid);
                this._progressList.push({key: gid, value: obj});
            }
        },
        _createProgress: function (gid) {
            return progress(gid);
        },
        getProgress: function (key) {
            this._progressList.forEach(function (item) {
                if (item.key == key) {
                    return progressController._progressList;
                }
            });
        }
    };
    $.ready(progressController.init());
    return progressController;
});