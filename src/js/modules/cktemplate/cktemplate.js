/**
 * Created by intel on 2017/2/20.
 */
define('ck_template', ['jquery'], function ($) {
    var template = function (options) {
        //DocumentFragment
        var CKMODEL = "ck-model";
        var that = this;
        that.OPTIONS = {
            model: '',
            reg: /\{\{(.*)\}\}/g,//默认匹配 {{xxx}} reg.exec(text);
            data: {}
        };
        that.init = function (options) {
            $.extend(that.OPTIONS, options);
            var dom = that.getDom();
            var newDom = that.createDom(dom, that);
            that.addDom(newDom);

        };
        that.getDom = function () {
            return $('[' + CKMODEL + '=' + that.OPTIONS.model + ']')[0];
        };
        that.createDom = function (node, temp) {
            var flag = document.createDocumentFragment();
            var child;
            while (child = node.firstChild) {
                console.log(child.nodeValue);
                that.compile(child, temp);
                flag.appendChild(child);
            }
            return flag;
        };
        that.addDom = function (dom) {
            $('[' + CKMODEL + '=' + that.OPTIONS.model + ']').html(dom);
        };
        that.compile = function (node, temp) {
            var reg = that.OPTIONS.reg;
            if (node.nodeType === 3) {
                var test = node.nodeValue.match(reg);
                if (test != null) {
                    node.nodeValue = "";
                    test.forEach(function (item) {
                        console.log(item);
                        var t = item.replace(/\{\{/g, "").replace(/\}\}/g, "");
                        node.nodeValue += temp.OPTIONS.data[t];
                    });
                }
            }else {
                that.compile(node.firstChild,temp);
            }
        };
        that.init(options)
    };
    return template;
});