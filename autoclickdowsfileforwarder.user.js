// ==UserScript==
// @name         Autoclick dowsfile ad page (*.organvn.xyz)
// @version      0.1
// @description  Just an adaptation of bloggerpemula's Bypass All Shortlinks script.
// @match        *://*.organvn.xyz/*
// @updateURL    https://raw.githubusercontent.com/rafaelupd/adblock/main/bypassdowsfileforwarder.user.js
// @downloadURL  https://raw.githubusercontent.com/rafaelupd/adblock/main/bypassdowsfileforwarder.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const bp = query => document.querySelector(query);
    const elementExists = query => bp(query) !== null;
    function click(query) {bp(query).click();}
    function clickIfElementExists(query, timeInSec = 0, funcName = 'setTimeout') {if (elementExists(query)) {window[funcName](function() {click(query);}, timeInSec * 1);}}

    clickIfElementExists('#btn6.btn.btn-primary.btn-captcha')

})();
