// ==UserScript==
// @name         gitee.com
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       lxthyme
// @match        https://gitee.com/openharmony-tpc/httpclient
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gitee.com
// @resource     customCSS https://raw.githubusercontent.com/lxthyme/next-cookbook/refs/heads/v14/mockData/stylish/gitee.com.css
// @run-at       document-end
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText("customCSS"));
})();
