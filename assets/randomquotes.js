var quotelist = [
["大鱼 小鱼 红鱼 麻鱼 我全部哈你","《绿苍苍》"],
["今日全球化 明日自己过", "《十年水流东 十年水流西》"],
["虽然说人生并没有什么意义<br />但是爱情确实让生活更加美丽","《阿珍爱上了阿强》"],
["所有年轻人<br />年轻人 年轻人<br />问题出现我再告诉大家","《问题出现我再告诉大家》"],
["嘿 我的朋友<br />我祝你一切顺利 生活愉快","《初恋》" ],
["好啦 别哭了 <br />吃饱饭就玩去吧","《莫怪你老爹》"],
["阿兄，你别怕！<br />我在这 我在这 我在这","《曹操你别怕》"],
["“交警同志，我、我、我是从农村来的。” ","《上县城》"],
["人们自由努力地工作<br />牛羊自由努力地跳舞","《做梦》"],
["今日开个大会 众仙可有到齐<br />如有到齐 何不拨开云雾相见","《大会》"],
["风咧在吹 雨咧在落<br />时间十多二十年过去了","《世情》"],
["阿良仔在工厂从早做到暗 哪儿都不曾去过<br /> 他的屋内还存有那么十多张 CD 和几本摇滚杂志","《世情》"],
["做好戏来 戏棚且勿拆<br />等我们来唱歌给你听","《收冬》"],
["农村已经科学地长出了城市 <br /> …… <br /> 城市又艺术地长出了农村","《城市找猪》"],
["我踏架脚车牵条猪","《踏架脚车牵条猪》"],
["鲜花在岸上开<br />他们在等待<br />你为什么不回来<br />哦，我已全都明白","《鲜花在岸上开》"],
["狗屎一样的东西呢 我见过很多<br />但是最美丽的风景我至今从没见过","《一些风景 》"],
["海风哦 啦啦啦啦 海风哦 啦啦啦啦<br />它吹到哪儿 哪儿就有人在唱歌","《海风》"],
["海风哦 啦啦啦啦 海风哦 啦啦啦啦<br />海风哦 海风哦 只要它在你的身边<br />去到哪里都不惊","《海风》"],
["如果可以的话我们就变成两只鸟儿<br />最好不要太大只<br />就像麻雀那样 四处去玩 四处去……","《海风》"]
];

var randNum = Math.floor( Math.random() * quotelist.length)
var q = quotelist[randNum][0];
var a = quotelist[randNum][1];

document.getElementById('quotes').innerHTML = q
document.getElementById('quotealbum').innerHTML = a