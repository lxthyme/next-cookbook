// ==UserScript==
// @name         lx.bejson.com.js
// @namespace    http://tampermonkey.net/
// @version      v1.0.1
// @description  try to take over the world!
// @author       lxthyme
// @match        https://www.bejson.com/jsoneditoronline/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bejson.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const init = () => {
        Array.from(document.querySelectorAll('ins'))
            .forEach(t => {
                t.style.display = 'block'
            })
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
