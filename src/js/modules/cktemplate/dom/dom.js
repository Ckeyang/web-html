/**
 * Created by Administrator on 2017/2/20.
 */
define('ck_dom', function () {
    var dom = {
        getDocumentFragment: function () {
            return document.createDocumentFragment();
        },
        getFirstChild: function (node) {
            return node.firstChild
        }
    }
});