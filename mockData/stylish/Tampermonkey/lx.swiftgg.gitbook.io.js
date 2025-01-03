// ==UserScript==
// @name         lx.swiftgg.gitbook.io
// @namespace    http://tampermonkey.net/
// @version      v1.0.0
// @description  try to take over the world!
// @author       You
// @match        https://gitbook.swiftgg.team/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=swiftgg.team
// @run-at       document-start
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==
// @resource     customCSS https://raw.githubusercontent.com/lxthyme/next-cookbook/refs/heads/v14/mockData/stylish/swiftgg.gitbook.io.css

(function() {
    'use strict';
    // GM_addStyle(GM_getResourceText("customCSS"));

const css = `
header a.css-4rbku5 {
  visibility: hidden;
}

`
GM_addStyle(css)
})();
