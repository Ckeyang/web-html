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
        "ck_popup": "modules/ui/popup",
        "ck_exception": "modules/exception/exception",
        "ck_url":"modules/util/url",
        "ck_http":"modules/network/http"
    },
    /**
     * 有依赖关系的包，如（jquery的插件需要在jquery加载后再加载）
     *
     */
    shim: {
        "ck_popup": ['jquery']
    }
});