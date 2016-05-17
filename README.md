# 前端页面开发结构
#####文档结构
    1.目录结构
    2.操作手册

## 目录结构
### SRC目录
#### CSS
_CSS结构_

    animation                      //存放css3 操作的动画
    common                         //主要用户存放reset.css 和common.css
    icon                           //用户存放icon.css （用来编译images里的icon）
    layout                         //框架类css
    model                          //模块css
    public                         //公共css（如：main.css  ,index.css）

#### HTML
_静态html_

    index.html                    //入口html
    model                         //模块html
    public                        //公用模型

#### IMAGES
_图片结构_

    animation                     //存放动画需要的图片
    icon                          //存放icon图片
    model                         //存放模块图片

#### JS
_JS结构_

    animation                     //存放js 操作的动画
    controllers                   //控制器js
    lib                           //库js(如：jquery.js/require.js等)
    modules                       //模块js
    util                          //公用工具util.js
    view                          //html引用的js
    widget                        //存放窗口控件js

#### TEMPLATE
_动态html，结构和静态html一样_
#### VENDER
_第三方插件(类似plugins)，其中按三方插件名进行区分_

### BUILD目录
_此目录用来存放编译后的各种文件，不用手动copy，此目录通过grunt插件来进行自动生成代码。_


##操作手册

### 首先需要安装node环境
    具体操作请百度，很详细

####安装需要的模块
    npm install

####安装grunt管理器
    npm install -g grunt-cli --save

####启动grunt
    可以手写脚本来启动，在package。json里的script可以配置脚本
    或者通过grunt直接启动
    现在配置好的启动脚本有：npm dev （开发环境启动）,npm gamma (这是打包的时候启动的)
    对应的grunt是：grunt dev，grunt gamma