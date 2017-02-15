/**
 * Created by Administrator on 2017/2/13.
 */
var http = document.getElementById('http').value || '../../';
require.config({
    baseUrl: http + 'js/',
    /**
     * 配置js 路径 和 引用名称
     */
    paths: {
        "jquery": "lib/jquery.min",
        "ck_popup": "modules/api/ui/popup",
        "ck_exception": "modules/api/exception/exception",
        "ck_url": "modules/api/util/url",
        "ck_http": "modules/api/network/http",
        "ck_response": "modules/api/util/response",
        "ck_menu": "modules/api/ui/menu",
        "ck": "modules/api/ck"
    },
    /**
     * 有依赖关系的包，如（jquery的插件需要在jquery加载后再加载）
     *
     */
    shim: {
        "ck_popup": ['jquery'],
        "ck_http": ['jquery']
    }
});