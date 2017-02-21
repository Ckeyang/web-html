/**
 * Created by Administrator on 2017/2/15.
 */
define('ck_regexp', ['ck_exception'], function (exception) {
    var regexp = {
        /**
         * 检查str
         * @param str
         * @param min
         * @param max
         * @param capital
         * @returns {boolean}
         */
        checkStrMinMaxCaptital: function (str, min, max, capital) {
            if (str.length >= min && str.length <= max && /[a-z]/.test(str) && /[0-9]/.test(str)) {
                if (capital && /[A-Z]/.test(str)) {
                    return false
                } else {
                    return true
                }
            } else {
                return false;
            }
        }
    };
});