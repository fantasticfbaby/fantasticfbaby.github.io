(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{441:function(t,i,e){"use strict";e.r(i);var n=e(1),a=Object(n.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"github的创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github的创建"}},[t._v("#")]),t._v(" github的创建")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("进入github帐号后，点击右上角+号，点击new repository，库的名称可任意，但是只有名称为“用户名.github.com”的名称创建的git可以通过外部网络访问")])]),t._v(" "),e("li",[e("p",[t._v("安装Git，从官网下载适合自己电脑的Git，点击安装，一路“Next”就可以了。安装完成，打开Console开始设置Git参数。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('  git config --global user.name "xxx"  \n  git config --global user.email "xxx@xxx.xxx"\n  //在上面的两个引号中分别填写你的名字和邮箱。\n  //由于Git是分布式的版本控制系统，可能会有很多用户，每个用户需要有自己的名字和邮箱来互相区分。\n')])])])])]),t._v(" "),e("p",[t._v("设置完毕后，可以通过命令行"),e("code",[t._v("git config -l")]),t._v("查看全局配置信息")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("cmd进入选择作为版本库的文件夹")])]),t._v(" "),e("li",[e("p",[t._v("输入命令")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('  git init\n  git add .//会把该目录内的所有文件复制到暂存区\n  git commit -m "备注"\n  git remote add origin https://github.com/用户名/版本库名.git\n  git push -u origin master\n')])])])]),t._v(" "),e("li",[e("p",[t._v("再进入github中你的版本库，发现东西都已经上传了")])])])])}),[],!1,null,null,null);i.default=a.exports}}]);