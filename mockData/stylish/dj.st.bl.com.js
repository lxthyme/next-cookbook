window.onload = () => {
  const dom = document.querySelector('.layui-tab-title');
  console.log('-->start observer');
  addObserver(dom, () => {
    const apiLi = document.querySelector('[lay-id="api.html"]');
    if (!apiLi) {
      return;
    }
    const btn = document.querySelector('#xl-copy');
    if (btn) {
      return;
    }
    insertCopyButton(apiLi);
  });
};

const addObserver = (dom, callback) => {
  if (!dom || !callback) {
    console.log(`-->${dom}: ${callback} 不存在!`);
  }
  // 要监控的目标节点
  const targetNode = dom;

  // 设置 MutationObserver 的配置项
  const config = {
    childList: true, // 监控目标子节点的新增/删除
    attributes: false, // 监控属性变化
    // attributeFilter: ['class', 'style'], // 只监控 class 和 style 的变化
    subtree: false, // 监控目标节点及其子节点的变化
  };

  // 创建一个 MutationObserver 实例，并传入回调函数
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        console.log('-->子节点被修改');
        callback && callback();
      } else if (mutation.type === 'attributes') {
        console.log(`-->属性 ${mutation.attributeName} 被修改`);
        // !callback && callback()
      }
    }
  });

  // 开始观察目标节点
  observer.observe(targetNode, config);

  // 停止观察（可在必要时调用）
  // observer.disconnect();
  // return observer;
};

const insertCopyButton = (parent) => {
  let btn = document.createElement('button');
  btn.id = 'xl-copy';
  btn.style = `cursor: pointer;
user-select: none;
background-color: #2878ff;
border-radius: 12.5px;
height: 25px;
padding: 0 10px;
margin-left: 5px;
border: none;
color: #fff;`;
  let textNode = document.createTextNode('format & copy');
  btn.appendChild(textNode);
  btn.addEventListener('click', async () => {
    const text = document
      .querySelector('iframe[src="api.html"]')
      .contentDocument.querySelector('#geoJsonTxt2').innerText;
    if (!text || text.trim().length <= 0) {
      console.log('-->result: ', a);
      return;
    }
    const b = JSON.parse(text).map((t) => {
      if (t.result) {
        t.result = JSON.parse(t.result);
      }
      if (t.param) {
        t.param = JSON.parse(t.param);
      }
      return t;
    });
    const copyString = JSON.stringify(b);
    await navigator.clipboard.writeText(copyString);
  });

  const $closed = parent.querySelector('.layui-tab-close');
  if ($closed) {
    parent.insertBefore(btn, $closed);
  } else {
    parent.appendChild(btn);
  }
};
