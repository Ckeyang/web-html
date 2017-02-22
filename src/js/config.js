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
        "foundation-datepicker":'lib/foundation-datepicker.min',
        "ck_defaultclick": "modules/api/ui/defaultclick",
        "ck_exception": "modules/api/exception/exception",
        "ck_url": "modules/api/util/url",
        "ck_response": "modules/api/util/response",
        "ck_menu": "modules/api/ui/menu",
        "ck_pagination": "modules/api/ui/pagination",
        "ck_progress": "modules/api/ui/progress",
        "ck": "modules/api/ck",

        "ck_templateC": "modules/cktemplate/templateController",
        "ck_template": "modules/cktemplate/model/template",
        "ck_dom": "modules/cktemplate/dom/dom",
        "ck_bind": "modules/cktemplate/bind/bind"
    },
    /**
     * 有依赖关系的包，如（jquery的插件需要在jquery加载后再加载）
     *
     */
    shim: {
        "ck_popup": ['jquery'],
        "ck_http": ['jquery'],
        "foundation-datepicker":['jquery']
    }
});