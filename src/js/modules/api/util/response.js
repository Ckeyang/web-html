/**
 * Created by Administrator on 2017/2/15.
 */
define('ck_response', function () {
    var response = {
        setOnresizeListner: function (fn) {
            window.onresize = function () {
                fn();
            }
        }
    };
    return response;
});