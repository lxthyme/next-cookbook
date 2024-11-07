// ==UserScript==
// @name         lx.docs.swift.org
// @namespace    http://tampermonkey.net/
// @version      v1.0.0
// @description  try to take over the world!
// @author       You
// @match        https://www.swift.org
// @icon         https://www.google.com/s2/favicons?sz=64&domain=swift.org
// @resource     customCSS https://raw.githubusercontent.com/lxthyme/next-cookbook/v14/mockData/stylish/docs.swift.org.css
// @run-at       document-start
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    GM_addStyle(GM_getResourceText("customCSS"));
})();
