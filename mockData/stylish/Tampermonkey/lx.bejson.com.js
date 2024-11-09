// ==UserScript==
// @name         lx.bejson.com
// @namespace    http://tampermonkey.net/
// @version      v1.0.1
// @description  try to take over the world!
// @author       lxthyme
// @match        https://www.bejson.com/jsoneditoronline/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bejson.com
// @resource     customCSS https://raw.githubusercontent.com/lxthyme/next-cookbook/v14/mockData/stylish/bejson.com.css
// @run-at       document-start
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText("customCSS"));
})();
