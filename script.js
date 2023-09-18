// ==UserScript==
// @name         Show Thread Images
// @namespace    http://tampermonkey.net/
// @version      1.0
// @license      GPLv3
// @description  Replaces all <image> links with images on old reddit
// @author       jaevibing
// @match        *://old.reddit.com/r/*/comments/*
// @icon         https://www.google.com/s2/favicons?domain=www.reddit.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function replaceLinks() {
        const links = document.querySelectorAll('a[target="_blank"]');

        links.forEach(link => {
            const img = document.createElement('img');
            img.src = link.href;
            img.style.maxWidth = '200px';
            link.innerHTML = '';
            link.appendChild(img);
        });
    }

    // Wait for the page to fully load before executing the script
    window.addEventListener('load', replaceLinks);
})();
