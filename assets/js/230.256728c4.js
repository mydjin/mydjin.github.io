(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{631:function(a,s,t){"use strict";t.r(s);var r=t(6),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"为什么不要写-hardcode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么不要写-hardcode"}},[a._v("#")]),a._v(" 为什么不要写 Hardcode？")]),a._v(" "),s("blockquote",[s("p",[a._v("本文作者："),s("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[a._v("程序员mydjin"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("本站地址："),s("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codefather.cn"),s("OutboundLink")],1)])]),a._v(" "),s("p",[a._v("想要成为编程大牛，不仅要具备充足的理论知识，还要有在实际项目中积累的编程经验和解决问题的能力。")]),a._v(" "),s("p",[a._v("有时，出于经验不足或者图省事儿，我们会在开发时写很多 hardcode。")]),a._v(" "),s("h2",{attrs:{id:"什么是-hardcode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-hardcode"}},[a._v("#")]),a._v(" "),s("strong",[a._v("什么是 hardcode？")])]),a._v(" "),s("p",[a._v("hardcode，即硬编码，就是把未来可能发生变化的信息直接以固定变量的形式写在代码中，或者把一段特殊的逻辑写死。hardcode 会使得日后修改和维护代码变得困难。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061012006.jpeg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("下面列举几种常见的 hardcode：")]),a._v(" "),s("ol",[s("li",[a._v("最常见的 hardcode 当属写死 ip 地址和数据库账号密码了，比如下面代码：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 第三方接口的 IP 地址private static final IP = 10.10.10.1;void doPost() {  // 得到请求地址  String requestUrl = IP + '/getUser';  // 发送请求  ...}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("看似没什么问题，但是如果要请求的接口地址发生变化，而业务负责人没有收到通知或者未即时修改，"),s("strong",[a._v("会导致所有的请求失败")]),a._v("！")]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("写死逻辑，比如在查询火车票价格时，针对特定 uid 的用户（比如某大客户）返回特殊的促销票价：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 特殊用户直接返回票价if (uid == 10001) {  return 50;} else {  // 从数据库查询票价  return db.getPriceByUid(uid);}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v('这里其实有两个 hardcode，"10001" 和 "50"。如果后续该用户的特殊身份失效，或者票价发生变化，又或者需要再给一批 uid 添加特权，都需要'),s("strong",[a._v("改动代码，重新上线")]),a._v("（在大公司，代码不可以随便发布，通常要通过审批等流程），"),s("strong",[a._v("非常麻烦")]),a._v("！")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061012968.jpeg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("以上好像还不能看出 hardcode 的危害有多大，如果项目代码都在自己的掌控之下，大不了数值变化时改代码呗。但是在大公司，或者人数众多的项目团队中，可能有些 hardcode 没那么容易被发现，"),s("strong",[a._v("hardcode 带来的影响和危害可以说是致命的")]),a._v("！")]),a._v(" "),s("p",[a._v("下面mydjin用自己悲伤的加班经历告诉大家，为什么不要写 hardcode。")]),a._v(" "),s("h2",{attrs:{id:"一行-hardcode-助我加班"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一行-hardcode-助我加班"}},[a._v("#")]),a._v(" "),s("strong",[a._v("一行 hardcode 助我加班")])]),a._v(" "),s("h3",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" "),s("strong",[a._v("背景")])]),a._v(" "),s("p",[a._v("公司内部有一个知名的消息队列服务，mydjin负责的项目中用到了消息队列生产端进行消息的推送，供其他业务方订阅消息进行独立处理。")]),a._v(" "),s("p",[a._v("一般情况下，连接消息队列就和连接数据库一样，输入地址、账号、密码，直连消息队列生产者即可，如图：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061012957.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("但是有时我们不直接连接消息队列本身，而是"),s("strong",[a._v("连接代理")]),a._v("，由代理负责将要发送的消息推送到不同的消息队列生产端，再进行发送，可以实现负载均衡。此时在代码中配置的地址是代理的地址而不是某一个具体的消息生产者，如图：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061012953.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("由于数据量很大，我们使用第二种模式，在代码中连接生产者代理，但之前代理使用的是固定的 IP 地址，代码如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('final String IP = "10.10.10.2";MessageProducer mp = new MessageProducer(IP, "xx", "xx");\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("固定 IP 毫无疑问是个 hardcode。但打死也没想到，这段不起眼的小 hardcode，给mydjin带来了巨大的工作量！")]),a._v(" "),s("p",[s("strong",[a._v("风云突变")])]),a._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),s("p",[a._v("前几天，mydjin正在恰可乐，该消息队列的服务团队突然发了个公告，内容如下：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061012951.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("这时，mydjin才想起来那段 hardcode，改吧改吧。。。")]),a._v(" "),s("p",[a._v("下面是一顿操作：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("先在代码中把 IP 地址改为他们指定的域名")])]),a._v(" "),s("li",[s("p",[a._v("用脚本检测我们线上机器到这个域名的网络连通性，千万别 ping 不通！")])]),a._v(" "),s("li",[s("p",[a._v("确认连通性后，部署服务到测试环境，进行消息推送测试")])]),a._v(" "),s("li",[s("p",[a._v("测试通过后，提交代码，等审批")])]),a._v(" "),s("li",[s("p",[a._v("审批之后，灰度部署（只升级部分机器）")])]),a._v(" "),s("li",[s("p",[a._v("观察无问题，全量部署")])])]),a._v(" "),s("p",[a._v("搞定？")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061012100.png",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"深藏不露"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深藏不露"}},[a._v("#")]),a._v(" "),s("strong",[a._v("深藏不露")])]),a._v(" "),s("p",[a._v("如果这样就搞定了，那真是太谢天谢地了。")]),a._v(" "),s("p",[a._v("改 bug 不可怕，可怕的是，你不知道有没有 bug，bug 藏在什么地方。。。")]),a._v(" "),s("p",[a._v("原来所有使用这个消息队列的代码都配置的固定 IP，而此时mydjin只是更换了自己负责的业务代码中的 IP 地址，但是我们依赖的其他服务（或者是一个 jar 包），有没有使用到这个代理，从而引入了 hardcode 呢？必须要全面且仔细地排查！")]),a._v(" "),s("p",[a._v("通过 gradle build --scan 命令扫描项目依赖的 jar 包，排查有没有这个消息队列的连接包。")]),a._v(" "),s("p",[a._v("经过排查，还真有一个 jar 包，使用该消息队列进行"),s("strong",[a._v("监控数据上报")]),a._v("。在这个 jar 包中，静静地躺着似曾相识的 hardcode：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('final String IP = "10.10.10.2";\nMessageProducer mp = new MessageProducer(IP, "xx", "xx");\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("于是，mydjin将 IP 切换成域名，然后升级包的版本，在依赖中使用新版本 jar 包。")]),a._v(" "),s("p",[a._v("搞定 x 2？")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061012841.png",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"慈航普渡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#慈航普渡"}},[a._v("#")]),a._v(" "),s("strong",[a._v("慈航普渡")])]),a._v(" "),s("p",[a._v("此时，mydjin只是解决了自己业务中的 hardcode，但是，使用这个包含过期 IP 的 jar 包的项目非常多，如果这些项目不对 jar 包进行升级的话，几天后用到这个 jar 包的项目都会受到影响！")]),a._v(" "),s("p",[a._v("既然看到了，不能不管吧！")]),a._v(" "),s("p",[a._v("于是，mydjin调查了所有可能使用这个 jar 包的团队，然后给他们发送了升级该 jar 的通知，这才终于搞定了！下班下班。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061012651.jpeg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("没想到，一行 hardcode 就带来了这么大的风险和工作量，善哉善哉。")]),a._v(" "),s("p",[a._v("既然 hardcode 危害那么大，有什么办法避免写 hardcode 呢？")]),a._v(" "),s("p",[s("strong",[a._v("如何避免 hardcode？")])]),a._v(" "),s("p",[a._v("针对不同的 hardcode，有不同的处理方式，此处总结如下几个技巧。")]),a._v(" "),s("h3",{attrs:{id:"_1-变量引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-变量引用"}},[a._v("#")]),a._v(" "),s("strong",[a._v("1. 变量引用")])]),a._v(" "),s("p",[a._v("最简单的做法，就是为相同的固定值定义一个变量（常量），最好在单独的类或文件中。这样，在修改时，只要修改一处即可。")]),a._v(" "),s("p",[a._v("错误代码：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('String requestUrl1 = "10.1.1.1" + "/getUser";\nString requestUrl2 = "10.1.1.1" + "/getSku";\nString requestUrl3 = "10.1.1.1" + "/getOrder";\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("正确代码：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('final String IP = "10.1.1.1";\nString requestUrl1 = IP + "/getUser";\nString requestUrl2 = IP + "/getSku";\nString requestUrl3 = IP + "/getOrder";\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("如果要调用第三方接口，最好不要在代码中直接写死 IP 地址，而是使用域名作为地址调用，可以通过在机器配置 host 来改变实际的服务 IP，便于维护。")]),a._v(" "),s("h3",{attrs:{id:"_2-配置化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置化"}},[a._v("#")]),a._v(" "),s("strong",[a._v("2. 配置化")])]),a._v(" "),s("p",[a._v("将所有可能改动的信息（比如数据库账号、密码、服务端口）单独存放到配置文件中进行管理，通过读取配置来获取信息。修改信息时只需要独立修改配置文件，而不用改动代码，非常方便，是目前项目开发中最常使用的一种方式。")]),a._v(" "),s("p",[a._v("示例配置文件：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("server.ip = 10.1.1.0\nserver.port = 8080\ndb.username = yupi\ndb.password = yupi\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("读取配置文件的代码：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('String serverIp = Config.getConfig("server.ip");\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_3-动态配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-动态配置"}},[a._v("#")]),a._v(" "),s("strong",[a._v("3. 动态配置")])]),a._v(" "),s("h3",{attrs:{id:"-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[a._v("#")])]),a._v(" "),s("p",[a._v("通过配置化的方式已经能够解决项目中的 hardcode，但还有一个问题，就是改动配置后，项目可能需要重新启动才能让新配置生效，还不够灵活。")]),a._v(" "),s("p",[a._v("为此，我们可以利用分布式配置中心实现动态配置，将所有的配置存放在数据库或分布式缓存、Etcd 中，通过在业务代码中引入 SDK 来监听配置变量。当配置发生修改时，变量的值会同步进行修改，而无需重启项目。")]),a._v(" "),s("p",[a._v("现在比较主流的配置中心有携程的 Apollo、阿里 Nacos 和 Spring Cloud Config 等，很多配置中心提供了可视化的界面，可以方便地进行配置管理、修改发布和版本控制。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202311061012785.png",loading:"lazy"}})]),a._v(" "),s("blockquote",[s("p",[a._v("携程 Apollo 控制台")])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("以上就是关于为什么不要写 hardcode 以及如何避免写 hardcode 的全部内容啦。")]),a._v(" "),s("p",[a._v("如果觉得有帮助，记得分享给小伙伴，再写硬代码头打烂！")])])}),[],!1,null,null,null);s.default=e.exports}}]);