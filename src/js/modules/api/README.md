#UI使用简介
### 编写规则
    统一使用ck开头
    ck-popup  ck加减号进行target定型
    设计要求  css 和 js 是分开的东西，  css 不能影响 js ， js也不能影响css
### 弹出框
    <a id="testPopup" ck-contolspopup="popup" class="ck_popup_group">
    显示普通弹出框
        <div ck-popup="popup" class="ck_popup ck_bg_rosiness ck_popup_bleft ck_dn"><span
               class="ck_normal_font ck_font_white">正常</span>
        </div>
    </a>
    这里使用了 ck-contolspopup ck-popup 
    意思就是ck-contolspopup这个控制器控制一个叫做popup的弹出框
    
### 导航菜单
    <span ck-controlsnav="menu" class="ck_nav_menu_btn"></span>
        <nav ck-nav="menu" id="testMenu" class="ck_nav_menu ck_font_white">
            <ul class="ck_vertical_menu">
                <li>主页</li>
                <li>layouts</li>
                <li>table</li>
            </ul>
        </nav>
    使用ck-controlsnav ck-nav
    次导航栏只能唯一，出现多次会报错