(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{659:function(a,t,s){"use strict";s.r(t);var e=s(6),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"什么是魔数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是魔数"}},[a._v("#")]),a._v(" 什么是魔数？")]),a._v(" "),t("blockquote",[t("p",[a._v("本文作者："),t("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员mydjin"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("本站地址："),t("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("大家好，我是mydjin，无意间在网上看到了这么一张图：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071357358.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("刚看到这段代码时，我是比较吃惊的，作者竟然使用了一个英文单词 "),t("code",[a._v("deadbeef")]),a._v(" 来定义宏常量！")]),a._v(" "),t("p",[a._v("我本来以为只是一位幽默的程序员的小玩笑，但后来查阅资料才知道，上图的这段代码竟是 C++ 的 hash_map 源码！而作者使用这个特殊的英文单词也是 “别有用心”。")]),a._v(" "),t("p",[a._v("deadbeef  的英文直译是死牛肉，但在编程领域中，它却有更深层的含义。给这个单词加上 "),t("code",[a._v("0x")]),a._v(" 、再转换为大写，就得到了一个典型的十六进制数字：0xDEADBEEF。这个数字经常用来标识新分配但是还未初始化的内存；在嵌入式系统中，也常常用它来表示程序崩溃或者出现了死锁，比如运行在 32 位 PowerPC 处理器上的 IBM RS/6000 系统、Mac OS 系统。")]),a._v(" "),t("p",[a._v("那我不禁感到好奇，为什么选择了这样一个单词，而不是 “FishPi” 之类的（开个玩笑，16 进制最多到 F）。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071357076.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("到网上查了一会，得到的结论竟然是：没什么理由，它是一个 "),t("strong",[a._v("“魔数”")]),a._v("！")]),a._v(" "),t("p",[a._v("所谓魔数，就是毫无理由、凭空出现、也不需要去解释其含义的常量。就是这么任性！")]),a._v(" "),t("p",[a._v("除了 deadbeef 外，我还百度到了很多魔数，比如：")]),a._v(" "),t("ul",[t("li",[a._v('0xBAADF00D ("bad food" 烂饭) 被微软的 LocalAlloc（LMEM_FIXED）使用，在使用调试堆时指示未初始化的已分配堆内存')]),a._v(" "),t("li",[a._v('0xDEADC0DE ("dead code" 死码) 在 OpenWRT 固件中用作标记，在静态固件的末尾表示要创建的 jffs2 文件系统的开始')]),a._v(" "),t("li",[a._v('0xDEAD10CC ("dead lock" 死锁)  用于表示 iOS 系统的闪退报告')])]),a._v(" "),t("p",[a._v("是不是感觉很神奇？也许这就是程序员的浪漫吧。")]),a._v(" "),t("p",[a._v("看到这里，我忍不住了，也去写了几个魔数，大家来猜猜看是什么意思：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('redisLock.lease(86400);\nif (fileSize > 1073741824) {\n  ...doSomething\n}\nif (num > 2147483647) {\n  printf("you lose");\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("这几个值都是我们写代码时经常用的，84600 = 3600 * 24 表示一天；1073741824 = 1024 * 1024 * 1024 表示 1 GB；而 2147483647 是 Java 等编程语言中 int 类型的最大值。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071357226.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("我把这些代码拿给我朋友一看，他嘲笑道：人家大佬写的魔数叫魔数，而你写的，只能叫烂代码。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071357499.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("的确，除非是上面那些大佬 / 前辈公认的、约定俗成的魔数外，我们在平时写代码的时候，尽量不要使用魔数，它会严重影响代码的可读性。我们可以通过定义常量来给这些魔数加上 “注释”，比如：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("int ONE_DAY = 86400;\nint ONE_GB = 1073741824;\nint MAX_INTEGER = 2147483647;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("这样就清晰很多了，也减少了我们输入错误的风险。")]),a._v(" "),t("p",[a._v("除了上面提到的魔数外，我还在网上看到了一些有实际意义的魔数，比如现代 3D 游戏之父约翰·卡马克在雷神之锤中的魔数：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("i = 0x5f3759df - ( i >> 1 );\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("完全不敢相信，上面这行代码竟然可以快速计算一个数字的平方根的倒数！")]),a._v(" "),t("p",[a._v("在网上一查，还有很多论文专门研究这个东西：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071357398.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("不得不感叹编程的魅力、数学的魅力啊！什么时候，我也能创造一个人尽皆知的魔数呢？")]),a._v(" "),t("p",[a._v("同事：“喂，mydjin，别特么做梦了，来搬砖！”")]),a._v(" "),t("p",[a._v("“来了来了，我再给你写几个魔数（烂代码）！”")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311071357242.png",loading:"lazy"}})]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("点击加入mydjin的 "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247505617&idx=1&sn=73c5e2b1ad9b22d93e8fd6153199ab22&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("编程学习圈子"),t("OutboundLink")],1),a._v(" ，和 "),t("strong",[a._v("3000 多名")]),a._v(" 小伙伴们一起交流学习编程，跟着mydjin直播做项目，享受免费简历修改、1 对 1 答疑等服务。")])])}),[],!1,null,null,null);t.default=n.exports}}]);