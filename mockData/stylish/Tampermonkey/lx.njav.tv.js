// ==UserScript==
// @name         lx.njav.tv
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  try to take over the world!
// @author       lxthyme
// @match        https://njav.tv/*
// @match        https://123av.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nvav.tv
// @run-at       document-end
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==
// @resource     customCSS https://raw.githubusercontent.com/lxthyme/next-cookbook/refs/heads/v14/mockData/stylish/njav.tv.css

(function() {
    'use strict';
    // GM_addStyle(GM_getResourceText("customCSS"));

const css = `
section .box-item-list .box-item .detail a,
.box-item .detail a {
  overflow: auto !important;
  white-space: normal !important;
  max-height: max-content !important;
}

#page-video {
  margin: 0 !important;
  max-width: max-content !important;
}
.col.col-sidebar {
  margin: 0 !important;
  padding: 0 !important;
  max-width: 430px !important;
}

div[style*="z-index: 999"],
.ad-floating,
.d-lg-block {
  display: none !important;
}
`
GM_addStyle(css)
})();
