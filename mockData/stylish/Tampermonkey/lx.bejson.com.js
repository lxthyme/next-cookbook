// ==UserScript==
// @name         lx.bejson.com
// @namespace    http://tampermonkey.net/
// @version      v1.0.1
// @description  try to take over the world!
// @author       lxthyme
// @match        https://www.bejson.com/jsoneditoronline/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bejson.com
// @run-at       document-start
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==
// @resource     customCSS https://raw.githubusercontent.com/lxthyme/next-cookbook/refs/heads/v14/mockData/stylish/bejson.com.css

(function() {
    'use strict';
    // GM_addStyle(GM_getResourceText("customCSS"));

const css = `
html,
body {
  height: 100%;
}

.recent-use-box,
.footer-nav,
.html-footer,
#saveAsEditorOnline,
.top1-link,
.xf-window,
.container > h1 {
  display: none !important;
}

.t-small-margin,
.t-big-margin {
  margin: 0 !important;
}

.container.t-small-margin {
  max-width: none !important;
  width: auto !important;
  height: calc(100% - 44px - 43px - 10px) !important;
}
#content-wrapper {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  width: 100% !important;
  height: 100% !important;
  padding-left: 10px;
}

`
GM_addStyle(css)
})();
