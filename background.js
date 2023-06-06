/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"version":"1.1.0","product":"NT","productName":"Nexttech","url":"https://backoffice.nexttech.asia/","email":"vuisk@chipo.asia","emailTo":"sanvankhanh@gmail.com","emailElas":"sankhanh108@gmail.com","password":"123456","db":"nexttech","model":"hr.attendance.addition","modelV2":"hr.attendance","searchRead":"web/dataset/search_read","passwordEmail":"3200FAFCB9F33602E2FC746AEE457BFD8D53","serviceId":"service_fj4da07","templateId":"template_5efr3cg","publicKey":"wMmXAT1Q9nk5C6lxp","pathLogin":"web/session/authenticate","debug":false}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/


const pjson = __webpack_require__(/*! ../config.json */ "./config.json");
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {

    let init = {
      method: request.method ? request.method : "GET",
      redirect: 'follow',
    };
    if (request.method !== 'GET') {
      init.body = request.data ? JSON.stringify(request.data) : {};
    }

    if (!request.fetch && request.msg !== 'capture') {
      try {
        let timeoutSecond = 60000;
        timeout(timeoutSecond, fetch(request.url, init).then(response => response.json()).catch(err => err))
          .then(response => sendResponse(response))
      } catch (error) {
      }
    }
    if (request.action === 'createTab') {
      chrome.tabs.create({url: request.url, active: false}, function () {
        chrome.storage.local.set({['fetchCors']: request.url});
      });

    }

    function timeout(milliseconds, promise) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("TIMEOUT"))
        }, milliseconds)
        promise.then(resolve, reject)
      })
    }

    return true;
  }
);



})();

/******/ })()
;
//# sourceMappingURL=background.js.map