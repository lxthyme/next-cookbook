// ==UserScript==
// @name         lx.book.flutterchina.club
// @namespace    http://tampermonkey.net/
// @version      v1.0.0
// @description  try to take over the world!
// @author       You
// @match        https://book.flutterchina.club/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=flutterchina.club
// @resource     customCSS https://raw.githubusercontent.com/lxthyme/next-cookbook/refs/heads/v14/mockData/stylish/book.flutterchina.club.css
// @run-at       document-start
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    GM_addStyle(GM_getResourceText("customCSS"));
})();
