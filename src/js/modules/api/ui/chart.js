/**
 * Created by Administrator on 2017/2/17.
 */
define('ck_chart', ['jquery', 'ck_canvas', 'exception'], function ($, canvas, exception) {
    var ck_chart = function () {
        var that = this;
        this.colors=[];
        this.OPTIONS = {
            type: 'rect',//矩形表
            targetDom: '#canvas',
            data: [{name: '1', value: 100}, {name: '2', value: 150}, {name: '1', value: 170}, {name: '1', value: 200}]
        };
        this.init = function (options) {
            $.extend(that.OPTIONS, options || {});
        };
        this._checkType = function () {
            var type = that.OPTIONS.type;
            switch (type) {
                case 'rect':
                    that._doRect();
                    break;
                case 'circle':
                    that._doCircle();
                    break;
                default:
                    exception.throwException("type 配置错误!（目前只支持 rect circle两种）");
                    break;
            }
        };
        this._doRect = function () {
        };
        this._doCircle = function () {
        };
    }
});