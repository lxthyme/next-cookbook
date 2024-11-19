// ==UserScript==
// @name         lx.swiftgg.gitbook.io
// @namespace    http://tampermonkey.net/
// @version      v1.0.0
// @description  try to take over the world!
// @author       You
// @match        https://gitbook.swiftgg.team/swift/swift-jiao-cheng/02_basic_operators
// @icon         https://www.google.com/s2/favicons?sz=64&domain=swiftgg.team
// @resource     customCSS https://raw.githubusercontent.com/lxthyme/next-cookbook/refs/heads/v14/mockData/stylish/swiftgg.gitbook.io.css
// @run-at       document-start
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText("customCSS"));
})();
