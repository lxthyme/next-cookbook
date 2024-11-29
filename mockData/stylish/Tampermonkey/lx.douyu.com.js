// ==UserScript==
// @name         lx.douyu.com
// @namespace    http://tampermonkey.net/
// @version      v1.0.5
// @description  try to take over the world!
// @author       lxthyme
// @match			*://*.douyu.com/0*
// @match			*://*.douyu.com/1*
// @match			*://*.douyu.com/2*
// @match			*://*.douyu.com/3*
// @match			*://*.douyu.com/4*
// @match			*://*.douyu.com/5*
// @match			*://*.douyu.com/6*
// @match			*://*.douyu.com/7*
// @match			*://*.douyu.com/8*
// @match			*://*.douyu.com/9*
// @match			*://*.douyu.com/topic/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=douyu.com
// @run-at       document-start
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==
// @resource     customCSS https://raw.githubusercontent.com/lxthyme/next-cookbook/refs/heads/v14/mockData/stylish/douyu.com.css

(function() {
    'use strict';
    // GM_addStyle(GM_getResourceText("customCSS"));

const css = `
/**
💖|🚽|🎺
*/
.IconCardAdBoundsBox,
.RechangeJulyPopups,
.layout-Player-announce,
.DiamondsFansRankList-anniversary,
.DiamondsFansRankList-policyText,
.CoinRedPacketPop-wrap,
#js-room-activity,
.Live-Act-Annual-Answer,
.liveActivityNotification,
.EffectPlayerDom,
.PrivilegeGiftTreasure,
.PlayerToolbar-ContentRow:nth-of-type(2),
/**.PlayerToolbar-ContentRow,*/
/**.layout-Player-toolbar,*/
/**#js-player-toolbar,*/
.layout-Player-effect,
img.Baby-image,
.DanmuEffectDom,
.PrivilegeGiftTreasure-container,
[class^="broadcastDiv-"],
Treasure, ActBase, js-room-activity {
  display: none !important;
}
.layout-Player-rank {
  display: block !important;
}
.layout-Player-rank,
.ChatRank {
  height: 60px !important;
}
/*
.PlayerToolbar {
  padding: 0;
}
*/

#js-player-toolbar {
  height: 30px !important;
}
.ChatRankWeek-listItem,
.FansMedalBox,
.Barrage-listItem,
.Barrage--paddedBarrage,
.DiamondsFansRankList-anniversary,
.DiamondsFansRankList-nickName,
.DiamondsFansRankList-policyText,
.PlayerToolbar,
.js-user-level {
  margin: 0 !important;
  padding: 0 !important;
}
.Barrage-notice--normalBarrage {
  padding: 0 !important;
  font-size: 12px !important;
}

.layout-Player-video {
  bottom: 0px !important;
}
#js-player-video {
  bottom: 30px !important;
}

`
GM_addStyle(css)
})();
