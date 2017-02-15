/**
 * Created by Administrator on 2017/2/14.
 */
define('ck_url', [], function () {
    var url = {
        getUrl: function () {
            var str = document.URL;
            return str;
        }
    };
    return url
});