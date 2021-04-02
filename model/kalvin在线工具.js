/// https://tools.kalvinbg.cn/txt/bullshitGenerator?%E4%B8%BB%E9%A2%98=%E6%90%9C%E7%B4%A2&%E6%96%87%E7%AB%A0%E7%B1%BB%E5%9E%8B=%E6%96%87%E5%8C%96%E7%89%88&%E9%9A%8F%E6%9C%BA%E7%A7%8D%E5%AD%90=61125814
{
  /* <script src="/static/js/bullshit-datas.js"></script> */
}

window.dataLayer = window.dataLayer || [];
window._$ = function (selector) {
  return document.querySelector(selector);
};
function 获取网址参数(参数) {
  return new URL(window.location.href).searchParams.get(参数);
}

let 主题 = bullshits["culture"].theme;
let themeKey = bullshits["culture"].themeKey;
let 论述 = bullshits["culture"].argument;
let 名人名言 = bullshits["culture"].quotes;
let 后面垫话 = bullshits["culture"].after;
let 前面垫话 = bullshits["culture"].before;
let wordNumber = 5000;

function 选择文章类型事件(obj) {
  主题 = bullshits[$(obj).val()].theme;
  themeKey = bullshits[$(obj).val()].themeKey;
  论述 = bullshits[$(obj).val()].argument;
  名人名言 = bullshits[$(obj).val()].quotes;
  后面垫话 = bullshits[$(obj).val()].after;
  前面垫话 = bullshits[$(obj).val()].before;
  _$("#theme").value = 主题;
}

function selectWordNumber(obj) {
  wordNumber = $(obj).val();
}

_$("#theme").value = 主题;

let 下取整 = Math.floor;
let 同余乘数 = 214013;
let 同余加数 = 2531011;
let 同余模 = Math.pow(2, 32);
let 随机种子 =
  获取网址参数("随机种子") || 下取整(随便取一个数(0, 同余模, Math.random));
function 同余发生器() {
  随机种子 = (随机种子 * 同余乘数 + 同余加数) % 同余模;
  return 随机种子 / 同余模;
}
function 随便取一句(列表) {
  let 坐标 = 下取整(同余发生器() * 列表.length);
  return 列表[坐标];
}
function 随便取一个数(最小值 = 0, 最大值 = 100, 随机数函数 = 同余发生器) {
  let 数字 = 随机数函数() * (最大值 - 最小值) + 最小值;
  return 数字;
}
function 来点名人名言() {
  let 名言 = 随便取一句(名人名言);
  名言 = 名言.replace("恁野爹曾经说过", 随便取一句(前面垫话));
  名言 = 名言.replace("这不禁令恁野爹深思", 随便取一句(后面垫话));
  return 名言;
}
function 来点论述() {
  let 句子 = 随便取一句(论述);
  句子 = 句子.replace(RegExp(themeKey, "g"), 主题);
  return 句子;
}
function 增加段落(段落) {
  if (段落[段落.length - 1] === " ") {
    段落 = 段落.slice(0, -2);
  }
  return "　　" + 段落 + "。 ";
}
function 生成文章() {
  主题 = _$("#theme").value;
  var 文章类型 = $("#文章类型").find("option:selected").text();
  history.pushState(
    { url: window.location.href },
    null,
    "?主题=" + 主题 + "&文章类型=" + 文章类型 + "&随机种子=" + 随机种子
  );
  let 文章 = [];
  let 段落 = "";
  let 文章长度 = 0;
  while (文章长度 < wordNumber) {
    let 随机数 = 随便取一个数();
    if (随机数 < 5 && 段落.length > 200) {
      段落 = 增加段落(段落);
      文章.push(段落);
      段落 = "";
    } else if (随机数 < 20) {
      let 句子 = 来点名人名言();
      文章长度 = 文章长度 + 句子.length;
      段落 = 段落 + 句子;
    } else {
      let 句子 = 来点论述();
      文章长度 = 文章长度 + 句子.length;
      段落 = 段落 + 句子;
    }
  }
  段落 = 增加段落(段落);
  文章.push(段落);
  let 文章主题 =
    '<div style="text-align: center"><h2>《' + 主题 + "》</h2></div>";
  let 排版 = "<div>" + 文章.join("</div><div>") + "</div>";
  $("#文章").removeClass("文章容器初始高度");
  _$("#文章").innerHTML = 文章主题 + 排版;
}

function 初始化文章类型(type) {
  // 主题 = bullshits[type].theme;
  if (!type) {
    type = "culture";
  }
  type = convertType(type);
  themeKey = bullshits[type].themeKey;
  论述 = bullshits[type].argument;
  名人名言 = bullshits[type].quotes;
  后面垫话 = bullshits[type].after;
  前面垫话 = bullshits[type].before;
  $("#文章类型")
    .find('option[value="' + type + '"]')
    .attr("selected", "selected");
}

function 初始化文章() {
  var 主题参数 = ktUtils.getUrlParam("主题");
  if (主题参数) {
    _$("#theme").value = 主题参数;
    var 文章类型 = ktUtils.getUrlParam("文章类型");
    初始化文章类型(文章类型);
    生成文章();
  }
}

function convertType(type) {
  let map = { 文化版: "culture", 素质版: "quality", 英文版: "english" };
  return map[type] || "culture";
}

$(document).ready(function () {
  init();

  // 复制到剪贴板
  var clipboard = new ClipboardJS("#copy");
  clipboard.on("success", function (e) {
    alert("复制成功");
    e.clearSelection();
  });

  var cli = new ClipboardJS("#copyLink", {
    text: function (trigger) {
      return window.location.href;
    },
  });
  cli.on("success", function (e) {
    alert("【" + 主题 + "】\n文章链接复制成功，你可以分享给你的朋友们了！");
    e.clearSelection();
  });

  /**
   * 初始化代码
   */
  function init() {
    初始化文章();

    // 渲染页签
    ktUtils.renderNavTab(ktConfig.moduleType.txt);
    ktUtils.initComments();
  }
});
