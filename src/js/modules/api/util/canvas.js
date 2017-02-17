/**
 * Created by Administrator on 2017/2/15.
 */
define('ck_canvas', ['jquery', 'ck_exception'], function ($, exception) {
    var canvas = {
        ctx: null,
        canvasBoard: null,
        canvasUrl: null,
        fontColor: null,
        fillColor: null,
        /**
         * 创建画板
         * height,width
         * @param options
         */
        createBoard: function (options) {
            var width = options.width || 150;
            var height = options.height || 150;
            var canvas = document.createElement('canvas');
            canvas.height = height;
            canvas.width = width;
            this.canvasBoard = canvas;
            this.ctx = this._getContext(canvas);
            return this;
        },
        /**
         * 重置画板
         * @returns {canvas}
         */
        resetBoard: function () {
            this.ctx.clearRect(this.canvasBoard.width, this.canvasBoard.height);
            return this;
        },
        /**
         * 返回canvas
         * @returns {null}
         */
        getCavas: function () {
            return this.canvasBoard
        },
        /**
         * 获取canvasUrl
         * @returns {null}
         */
        getcanvasUrl: function () {
            return this.canvasUrl
        },
        /**
         * 获取画笔
         * @param canvas
         * @returns {*}
         * @private
         */
        _getContext: function (canvas) {
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                return ctx;
            } else {
                exception.throwException("此浏览器不支持canvas");
                return null;
            }

        },
        /**
         * 移动笔尖
         * @param options
         * @returns {canvas}
         */
        moveCtx: function (options) {
            var ctx = this.ctx;
            var zoptions = {
                x: 0, y: 0
            };
            $.extend(zoptions, options || {});
            ctx.moveTo(zoptions.x, zoptions.y);
            return this
        },
        /**
         * 画线
         * @param options
         * @returns {canvas}
         */
        drawLine: function (options) {
            var ctx = this.ctx;
            var zoptions = {
                x: 0,
                y: 0
            };
            $.extend(zoptions, options || {});
            ctx.lineTo(zoptions.x, zoptions.y);
            return this;
        },
        /**
         * 画圆
         * arc(x, y, radius, startAngle, endAngle, anticlockwise)
         * @param options
         * @returns {canvas}
         */
        drawCircle: function (options) {
            var zoptions = {
                x: 0,
                y: 0,
                radius: 10,
                startAngle: 0,
                endAngle: Math.PI,
                anticlockwise: true
            };
            $.extend(zoptions, options || {});
            var ctx = this.ctx;
            ctx.arc(zoptions.x, zoptions.y, zoptions.radius, zoptions.startAngle, zoptions.endAngle, zoptions.anticlockwise);
            return this;
        },
        /**
         * 画圆弧
         * arcTo(x1, y1, x2, y2, radius)
         * @param options
         */
        drawArc: function (options) {
            var ctx = this.ctx;
            var zoptions = {
                x1: 0,
                y1: 0,
                x2: 10,
                y2: 0,
                radius: 10
            };
            $.extend(zoptions, options || {});
            ctx.arc(zoptions.x1, zoptions.y1, zoptions.x2, zoptions.y2, zoptions.radius);
            return this;
        },
        /**
         * 画矩形
         * @param options
         * @returns {canvas}
         */
        drawRect: function (options) {
            var zoptions = {
                x: 0,
                y: 0,
                width: 10,
                height: 10
            };
            $.extend(zoptions, options || {});
            var ctx = this.ctx;
            ctx.fillStyle = options.color;
            ctx.fillRect(zoptions.x, zoptions.y, zoptions.width, zoptions.height);
            return this;
        },
        /**
         * 画图片
         * @param options
         * @returns {canvas}
         */
        drawImage: function (options) {
            var ctx = this.ctx;
            return this;
        },
        /**
         * 写字
         * @param options
         * @returns {canvas}
         */
        drawText: function (options) {
            var ctx = this.ctx;
            return this;
        },
        /**
         * 贝塞尔曲线
         * quadraticCurveTo(cp1x, cp1y, x, y)
         * @param options
         */
        drawBezier: function (options) {
            var ctx = this.ctx;
            var zoptions = {
                cp1x: 0,
                cp1y: 0,
                x: 10,
                y: 10
            };
            $.extend(zoptions, options || {});
            ctx.quadraticCurveTo(zoptions.cp1x, zoptions.cp1y, zoptions.x, zoptions.y);
            return this
        },
        /**
         * 画板 变成 图片
         * @param options
         * @returns {canvas}
         */
        canvasToDataUrl: function (options) {
            var canvas = this.canvasBoard;
            var options = options || {image: 'image/jpeg', quality: 1.0};
            this.canvasUrl = canvas.toDataURL(options.image, options.quality);
            return this;
        }
    }
});