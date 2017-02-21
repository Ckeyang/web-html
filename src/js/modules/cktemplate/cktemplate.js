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
            data: {}
        };
        that.reg = /\{\{(.*)\}\}/g;//默认匹配 {{xxx}}
        that.data = null;
        /**
         * 加载
         * @param options
         */
        that.init = function (options) {
            $.extend(that.OPTIONS, options);
            that.data = that.OPTIONS.data;
            that.flow();
        };
        /**
         * 流程
         */
        that.flow = function () {
            var start = new Date().getTime();
            that.checkData();
            console.log(new Date().getTime() - start);

            /* var dom = that.getDom();
             var newDom = that.createDom(dom, that);
             that.addDom(newDom);*/
        };
        that.checkData = function () {
            if (that.data instanceof Array) {

            } else if (that.data instanceof Object) {

            } else {
                throw('data只能是json或者jsonArray');
            }
        };
        /*that.getDom = function () {
         return $('[' + CKMODEL + '=' + that.OPTIONS.model + ']')[0];
         };
         that.createDom = function (node, temp) {
         var flag = document.createDocumentFragment();
         var child;
         console.log(node.attributes);
         while (child = node.firstChild) {
         that.compile(child, temp);
         flag.appendChild(child);
         }
         return flag;
         };
         that.addDom = function (dom) {
         $('[' + CKMODEL + '=' + that.OPTIONS.model + ']').html(dom);
         };
         that.compile = function (node, temp) {
         var reg = that.reg;
         if (node.nodeType === 3) {
         var test = node.nodeValue.match(reg);
         if (test != null) {
         node.nodeValue = "";
         test.forEach(function (item) {
         var key = item.replace(/\{\{/g, "").replace(/\}\}/g, "");
         node.nodeValue += temp.data[0][key];
         });
         }
         } else {
         that.compile(node.firstChild, temp);
         }
         };
         that.setData = function () {

         };*/
        that.init(options)
    };
    return template;
});