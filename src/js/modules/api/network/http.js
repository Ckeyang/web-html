/**
 * Created by Administrator on 2017/2/14.
 */
define('ck_http', ['jquery', 'ck_exception'], function ($, exception) {
    /**
     * options {{url: string, type: string, async: boolean, success: null, cache: boolean, data: null, error: null, timeout: number, dataType: string, statusCode: {404: http.OPTIONS.statusCode.404, 502: http.OPTIONS.statusCode.502, 200: http.OPTIONS.statusCode.200}}}
     *
     * @param options
     */
    var http = function (options) {
        this.METHOD = ['get', 'post'];
        this.OPTIONS = {
            url: '',
            type: 'get',
            async: false,
            success: null,
            cache: false,
            data: null,
            error: null,
            timeout: 5000,
            dataType: 'json',
            statusCode: {
                404: function () {
                    exception.throwException('访问的页面不存在');
                },
                502: function () {
                    exception.throwException('服务器出错');
                },
                200: function () {
                    exception.throwException('页面程序有问题');
                }
            }
        };
        this.init = function (options) {
            $.extend(this.OPTIONS, options || {});
            this._checkUrl();
        };
        this._checkUrl = function () {
            var options = this.OPTIONS;
            options.url === '' ? exception.throwException('url 不能为空') : this._checkMethod();
        };
        this._checkMethod = function () {
            var options = this.OPTIONS;
            this.METHOD.indexOf(options.type) == -1 ? exception.throwException('type 只支持get和post') : this._ajax()
        };
        this._ajax = function () {
            $.ajax(this.OPTIONS);
        };
        this.init(options);
    };
    return http;
});