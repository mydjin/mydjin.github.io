(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{729:function(t,e,_){"use strict";_.r(e);var v=_(6),l=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"腾讯二面-我被-赛马-问题难住了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#腾讯二面-我被-赛马-问题难住了"}},[t._v("#")]),t._v(" 腾讯二面，我被 “赛马” 问题难住了")]),t._v(" "),e("blockquote",[e("p",[t._v("本文作者："),e("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员mydjin"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("本站地址："),e("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codefather.cn"),e("OutboundLink")],1)])]),t._v(" "),e("blockquote",[e("p",[t._v("很难一次答对的经典面试题，处处是坑")])]),t._v(" "),e("p",[t._v("大家好，我是mydjin。")]),t._v(" "),e("p",[t._v("今天分享一道我曾经被难住了的面试题，也是一道大厂面试时经常会被问到的面试题，赛马问题。")]),t._v(" "),e("p",[t._v("题目其实不难，但是第一次被问到时，稍有不慎，就会答错。所以，一起来学习下吧！")]),t._v(" "),e("h3",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),e("p",[t._v("有 "),e("strong",[t._v("64 匹马")]),t._v(" 赛跑，没有任何秒表之类的计时工具，跑道每次只允许 "),e("strong",[t._v("8 匹马")]),t._v(" 同时比，问 "),e("strong",[t._v("最少")]),t._v(" 需要比赛几场才能够选出跑的最快的 "),e("strong",[t._v("前 4 名")]),t._v("？")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311070912843.jpeg",loading:"lazy"}})]),t._v(" "),e("p",[t._v("题目描述就这么多，大家可以先思考一下，然后在投票中给出答案吧~")]),t._v(" "),e("p",[t._v("很抱歉，请在手机微信登录投票")]),t._v(" "),e("p",[t._v("最少需要比赛多少场呢？ 单选")]),t._v(" "),e("p",[t._v("10")]),t._v(" "),e("p",[t._v("186票46.97%")]),t._v(" "),e("p",[t._v("11")]),t._v(" "),e("p",[t._v("81票20.45%")]),t._v(" "),e("p",[t._v("12")]),t._v(" "),e("p",[t._v("60票15.15%")]),t._v(" "),e("p",[t._v("12 场以上")]),t._v(" "),e("p",[t._v("69票17.42%")]),t._v(" "),e("p",[t._v("下面公布解题思路和答案。")]),t._v(" "),e("h3",{attrs:{id:"解题思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),e("p",[t._v("这道题目坑点很多，题目中任何一个数字的改动都会影响到最终结果，因此一定要明确题目上的关键数字。")]),t._v(" "),e("p",[t._v("网上也有很多题目的变种，比如 36 匹马 6 个跑道找前三名，但思路都是一致的，下面我们模拟一下比赛全程。")]),t._v(" "),e("h4",{attrs:{id:"第一轮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一轮"}},[t._v("#")]),t._v(" 第一轮")]),t._v(" "),e("p",[t._v("首先，跑道最多允许 8 匹马同时比，那我们一定要最大程度地利用资源，每场比赛都要上满 8 匹马。")]),t._v(" "),e("p",[t._v("所以第一轮最简单，无脑 "),e("strong",[t._v("将 64 匹马分为 8 组，每组 8 匹马比一场")]),t._v(" 就好了，共计 8 场比赛。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("组号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("参赛选手")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐴 🐴 🐴 🐴 🐴 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐴 🐴 🐴 🐴 🐴 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐴 🐴 🐴 🐴 🐴 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐴 🐴 🐴 🐴 🐴 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 5")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐴 🐴 🐴 🐴 🐴 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 6")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐴 🐴 🐴 🐴 🐴 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐴 🐴 🐴 🐴 🐴 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐴 🐴 🐴 🐴 🐴 🐴 🐴 🐴")])])])]),t._v(" "),e("p",[t._v("本轮比赛之后，由于题目要求选出前 4 名，因此，每组比赛第 4 名之后的马可以直接淘汰，还剩 32 匹马。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("组号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("参赛选手（🐎 = 组内冠军）")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 5")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 6")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 7")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])])])]),t._v(" "),e("h4",{attrs:{id:"第二轮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二轮"}},[t._v("#")]),t._v(" 第二轮")]),t._v(" "),e("p",[t._v("第二轮开始，我们必须精打细算了。")]),t._v(" "),e("p",[t._v("最简单的方式是将剩下的 32 匹马直接分为 4 组去比赛，但其实利用上一轮的信息，我们可以有更好的方法。")]),t._v(" "),e("p",[e("strong",[t._v("让上轮比赛中，每组第 1 名一起比赛 1 场，然后按照本轮比赛结果，选出前 4 组。")])]),t._v(" "),e("p",[t._v("赛场：🐎 🐎 🐎 🐎 🐎 🐎 🐎 🐎")]),t._v(" "),e("p",[t._v("比赛结果：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("组号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("参赛选手（🐎 = 组内冠军）")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 5")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])])])]),t._v(" "),e("p",[t._v("这么操作的原因是：如果某个组的第一名都进不了前 4，那这个组剩下的马肯定也进不了前 4，直接整组淘汰即可。")]),t._v(" "),e("p",[t._v("截止到目前，还剩下 16 匹马，那这一轮淘汰到这里就结束了么？")]),t._v(" "),e("p",[t._v("其实并没有，以这轮比赛排名第四的马所在的组为例，这个组的冠军最高也才第四名，那么这个组其他的马也是可以被淘汰的。同理，可以淘汰更多的马，剩余 10 匹。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("组号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("参赛选手（🐎 = 组内冠军）")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴 🐴")])])])]),t._v(" "),e("p",[t._v("现在场上还有 10 匹马，看似胜利近在咫尺，但其实，接下来才是关键！")]),t._v(" "),e("h4",{attrs:{id:"第三轮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三轮"}},[t._v("#")]),t._v(" 第三轮")]),t._v(" "),e("p",[t._v("接下来我们的目标是从 10 匹马中选出前 4 名，但一场比赛只能容纳 8 匹马，那好像至少还得比两场。")]),t._v(" "),e("p",[t._v("一步步来吧，先选 8 匹马比一场呗，问题是选哪 8 匹马呢？")]),t._v(" "),e("p",[t._v("不知道大家有没有发现，在无意中，冠军已经产生了，那就是组内组外都未尝败绩的那匹马，强中之强！")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("组号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("参赛选手（🐎 = 组内冠军）")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🏆 🐴 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎 🐴")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🐎")])])])]),t._v(" "),e("p",[t._v("因此，它不用再比了，目标变成，从剩余 9 匹马中选出第 2 - 4 名。")]),t._v(" "),e("p",[t._v("让我们任意选 8 匹马先比一场吧，选出前 3 名。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("组号")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("参赛选手（🐎 = 组内冠军）")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🏆 [ 🐴 🐴 🐴 ] 出战")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("[ 🐎 🐴 🐴 ] 出战")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("[ 🐎 🐴 ] 出战")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("组 4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("🦓（未参与比赛的马）")])])])]),t._v(" "),e("p",[t._v("那么最后一轮，还需要让上轮没比的马与前 3 名比 1 场，万一人家是黑马呢？")]),t._v(" "),e("p",[t._v("赛场：🐎 🐴 🐴 🦓")]),t._v(" "),e("p",[e("strong",[t._v("至此，答案出来了，最少需要 8 + 1 + 1 + 1 = 11 场。")])]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311070912842.jpeg",loading:"lazy"}})]),t._v(" "),e("p",[e("strong",[t._v("然而，这是一个错误答案！")])]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311070912979.jpeg",loading:"lazy"}})]),t._v(" "),e("p",[t._v("其实，还有更优解！")]),t._v(" "),e("p",[t._v("在还剩 9 匹马的时候，如果不任选 8 匹马比赛，而是先移除组 2 的冠军，让剩下 8 匹马赛一场。")]),t._v(" "),e("p",[t._v("如果这场比赛中，组 3 的冠军拿了第一，那么由于之前已经证明了组 2 的冠军强于组 3 的冠军，则前 4 名已经确定，只需要比 10 场。如果它不是第一，那么还是要多比一场了。")]),t._v(" "),e("p",[e("strong",[t._v("因此正确答案是，最少需要 10 场，你做对了么？")])]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311070912841.jpeg",loading:"lazy"}})]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("最后，为什么这道题目会出现在程序员面试中呢？聪明的你一定发现了，上述的赛马问题本质上是一个 TopN（取前几名）问题，可以通过分治的方式解决，是一种经典的算法思维。如果是在分布式系统中，则体现了 "),e("strong",[t._v("并行计算")]),t._v(" 的优势，可以利用资源（比如有 8 个跑道）对各个组同时计算，从而提高运算效率。此外，利用已有的数据结果也是非常重要的。")]),t._v(" "),e("p",[t._v("祝大家周末愉快，学到的话别忘了帮mydjin点个 "),e("strong",[t._v("赞 + 在看")]),t._v(" 支持下吧！❤️")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311070912471.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=l.exports}}]);