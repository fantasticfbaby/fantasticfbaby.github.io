(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{433:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("首先，请死记硬背Node事件循环的 6个阶段")]),t._v(" "),n("ol",[n("li",[t._v("timers 执行setTimeout和setInterval的callback")]),t._v(" "),n("li",[t._v("pending callback 某些系统操作的callback，可以理解为除了其它回调以外的回调")]),t._v(" "),n("li",[t._v("idle/prepare 内部用，不管")]),t._v(" "),n("li",[t._v("poll 执行IO回调和轮询队列中的事件")]),t._v(" "),n("li",[t._v("check 执行setImmediate的callback")]),t._v(" "),n("li",[t._v("close callback 执行close事件的callback")])]),t._v(" "),n("p",[t._v("Node事件循环中需要注意在执行上下文中当前处于哪个阶段")]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timeout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'immediate'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("比如这段代码"),n("strong",[t._v("如果从主模块中调用两者，那么时间将受到进程性能的限制。其结果也不一致。这是由于setTimeout本身在超时后才进入队列的机制决定的，当事件循环启动时，定时任务可能还没进入timers队列，从而错过了该轮循环，导致落后于setImmediate")])]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timeout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'immediate'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("如果在IO回调即poll阶段调用，那么始终是immediate在前面timeout在后面")]),t._v(" "),n("h3",{attrs:{id:"nexttick-微任务-宏任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-微任务-宏任务"}},[t._v("#")]),t._v(" nexttick & 微任务 & 宏任务")]),t._v(" "),n("p",[n("strong",[t._v("nexttick")]),t._v("即node的"),n("strong",[t._v("process.nextTick")]),t._v("，网上有的教程把nexttick笼统的归入微任务，是不合理的，因为nexttick是优先于微任务执行的，如果强行归入微任务的话，那也是微任务中优先级最高的，那这样就需要把微任务队列理解为一个优先级队列，且这个优先级只是单纯为nexttick服务的，增加了理解的复杂度，所以最好还是把nexttick与微任务区分开来，单独理解为一个队列")]),t._v(" "),n("p",[n("strong",[t._v("微任务")]),t._v(" 在node中只有"),n("strong",[t._v("promise")])]),t._v(" "),n("p",[n("strong",[t._v("宏任务")]),t._v(" 指的就是node中的"),n("strong",[t._v("event loop")]),t._v("在node中严格来说是是没宏任务这个概念的，浏览器中倒是有宏任务这个概念，不过为了对标浏览器，减小理解差异性，所以把node中的event loop讲成了宏任务")]),t._v(" "),n("p",[t._v("在"),n("strong",[t._v("每个宏任务开始前都会把nexttick队列和微任务队列清空")]),t._v("，顺序是"),n("strong",[t._v("nexttick队列优先于微任务队列")]),t._v("，所以理论上是可以做到在nexttick/微任务执行过程中不断插入新的nexttick/微任务从而导致无法进入事件循环的")]),t._v(" "),n("p",[t._v("虽说node的执行是由事件循环驱动的，但是不要天真的以为node只有事件循环，不然同步代码放哪里执行？")]),t._v(" "),n("p",[t._v("所以综上所述，node执行代码的顺序是"),n("strong",[t._v("同步代码 → nexttick队列 → 微任务队列 → 事件循环（7个阶段之一）→ nexttick队列 → 微任务队列 → 事件循环（7个阶段之一） → ...")])])])}),[],!1,null,null,null);s.default=e.exports}}]);