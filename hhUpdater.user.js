// ==UserScript==
// @name         hhUpdater
// @namespace    hhUpdater
// @description  headhunter.ru
// @icon         https://i.hh.ru/logos/svg/hh.ru__min_.svg
// @version      0.1.3
// @author       DEMENT0R
// @downloadURL  https://github.com/DEMENT0R/hhUpdater/raw/master/hhUpdater.user.js
// @updateURL    https://github.com/DEMENT0R/hhUpdater/raw/master/hhUpdater.user.js
// @license      MIT
// @noframes
// @match        https://*.hh.ru/applicant/resumes/*
// @match        https://*.hh.ru/applicant/resumes?from=header_new
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var $ = window.jQuery;

    var button = "<div class='hh-updater-click-block supernova-navi-item'>";
    button += "<button class='hh-updater-click-button'>Up</button>";
    button += "</div>";

    $(".supernova-navi_lvl-2").append(button);

    $( ".hh-updater-click-button" ).click(function() {
        $("button:contains('Поднять в поиске')").click();
        $( ".hh-updater-click-block" ).remove();
    });

})();
