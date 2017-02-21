/**
 * Created by Administrator on 2017/2/14.
 */
define('ck_exception', [], function () {
    var exception = {
        exceptionList: [],
        throwException: function (str) {
            this.exceptionList.push(str);
            console.log(str);
            return false;
        }
    };
    return exception;
});