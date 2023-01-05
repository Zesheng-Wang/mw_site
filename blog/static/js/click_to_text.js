var body = document.getElementsByClassName("container")[0];
var textArr = [
  "落日沉溺于橘色的海, 晚风沦陷于赤诚的爱",
  "❤",
  "失落时悄悄伸出手和风击个掌",
  "毕竟人生很长, 少有圆满",
  "遇见是福气, 不遇见也是",
  "还好思念无声, 否则震耳欲聋",
  "总有新故事值得盼望",
  "我依旧真诚待人, 但不再给予厚望",
  "就算疲惫不堪, 也要拥抱明天",
  "没有销声匿迹, 我在热爱生活",
  "一只精心准备的花, 胜过万千朵玫瑰",
  "能被一个人放在心上, 从来不是一个容易的事",
  "风华正茂, 当然要落落大方",
  "熬的不是夜, 是短暂的自由",
  "我做了一场大梦, 好似过了一段人生",
  "",
];
document.addEventListener(
  "click",
  (e) => {
    // 生成字符串
    var ev = e || window.event;
    var baseX = ev.pageX;
    var baseY = ev.pageY;
    var new_span = document.createElement("span");
    new_span.innerText = textArr[parseInt(Math.random() * textArr.length)];
    new_span.style.position = "fixed";
    new_span.style.left = baseX - 10 + "px";
    new_span.style.top = baseY + "px";
    new_span.style.color =
      "RGB(" +
      parseInt(Math.random() * 255) +
      "," +
      parseInt(Math.random() * 255) +
      "," +
      parseInt(Math.random() * 255) +
      ")";
    body.appendChild(new_span);
    // 定时器1实现字符串上升效果
    var timer = window.setInterval(() => {
      new_span.style.top =
        parseInt(window.getComputedStyle(new_span, null)["top"]) - 2 + "px";
      // console.log(window.getComputedStyle(new_span,null)['fontSize']);
      new_span.style.opacity =
        window.getComputedStyle(new_span, null)["opacity"] - 0.02;
    }, 30);
    // 定时器2实现字符串消失
    window.setTimeout(() => {
      window.clearInterval(timer);
      body.removeChild(new_span);
    }, 1000);
  },
  false
);
