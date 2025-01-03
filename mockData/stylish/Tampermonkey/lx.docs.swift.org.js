// ==UserScript==
// @name         lx.docs.swift.org
// @namespace    http://tampermonkey.net/
// @version      v1.0.0
// @description  try to take over the world!
// @author       You
// @match        https://www.swift.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=swift.org
// @run-at       document-start
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==
// @resource     customCSS https://raw.githubusercontent.com/lxthyme/next-cookbook/refs/heads/v14/mockData/stylish/docs.swift.org.css

(function() {
    'use strict';

    // Your code here...
    // GM_addStyle(GM_getResourceText("customCSS"));

const css = `
nav header {
  display: none;
}

`
GM_addStyle(css)
})();
