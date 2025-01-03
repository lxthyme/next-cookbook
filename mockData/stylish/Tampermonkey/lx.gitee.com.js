// ==UserScript==
// @name         lx.gitee.com
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       lxthyme
// @match        https://gitee.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gitee.com
// @run-at       document-end
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==
// @resource     customCSS https://raw.githubusercontent.com/lxthyme/next-cookbook/refs/heads/v14/mockData/stylish/gitee.com.css

(function() {
    'use strict';
    // GM_addStyle(GM_getResourceText("customCSS"));

const css = `
.ui.container {
  width: auto !important;
}
#git-project-container {
  width: 80% !important;
}

#git-readme {
  width: 120%;
}

`
GM_addStyle(css)
})();
