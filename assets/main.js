/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Add your script here
// code copy button

/***************** clipboard start ***************/
function addCopyButtons(clipboard) {
  document.querySelectorAll('pre > code').forEach(function (codeBlock) {
    var button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'Copy';
    button.addEventListener('click', function () {
      clipboard.writeText(removeLineNumber(codeBlock.innerText)).then(function () {
        /* Chrome doesn't seem to blur automatically,
           leaving the button in a focused state. */
        button.blur();
        button.innerText = 'Copied!';
        setTimeout(function () {
          button.innerText = 'Copy';
        }, 2000);
      }, function (error) {
        button.innerText = 'Error';
      });
    });
    var pre = codeBlock.parentNode;

    if (pre.parentNode.classList.contains('highlight')) {
      var highlight = pre.parentNode;
      highlight.parentNode.insertBefore(button, highlight);
    } else {
      pre.parentNode.insertBefore(button, pre);
    }
  });
}

function removeLineNumber(copyText) {
  var result = '';
  var lines = copyText.split('\n');

  for (var i = 0; i < lines.length; i++) {
    if (i < 10) {
      lines[i] = lines[i].substr(2);
    } else {
      lines[i] = lines[i].substr(2);
    }
  }

  return lines.join('\n');
}

if (navigator && navigator.clipboard) {
  addCopyButtons(navigator.clipboard);
} else {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
  script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
  script.crossOrigin = 'anonymous';

  script.onload = function () {
    addCopyButtons(clipboard);
  };

  document.body.appendChild(script);
}
/***************** clipboard end ***************/
// search.js

/****************search.js start******************* */
// enter


window.onload = function () {
  document.onkeydown = function (ev) {
    var event = ev || event;

    if (event.keyCode == 13) {
      search();
    }
  };

  var searchButton = document.getElementById('--search-button--');

  if (searchButton != null) {
    searchButton.addEventListener('click', function () {
      search();
    });
  }
}; // search


function search() {
  key = document.getElementById("search-key").value;

  if (key === "") {
    return;
  } // debugger


  document.getElementById("search-key").value = ""; // tip

  document.getElementById("search-tip").innerText = "搜索中，请稍后 ...";
  document.getElementById("search-tip").style.display = "block"; // clear

  var el = document.getElementById('result');
  var childs = el.childNodes;

  for (var i = childs.length - 1; i >= 0; i--) {
    el.removeChild(childs[i]);
  } // xml


  xmltext = new XMLHttpRequest();
  xmltext.open("GET", "/index.xml", false);
  xmltext.send();
  resp = xmltext.responseXML;
  items = resp.getElementsByTagName("item"); // search

  var i = 0;
  haveResult = false;

  while (i < items.length) {
    txt = items[i].getElementsByTagName("title")[0].innerHTML + items[i].getElementsByTagName("description")[0].innerHTML;

    if (txt.toLowerCase().indexOf(key.toLowerCase()) > -1) {
      haveResult = true;
      title = items[i].getElementsByTagName("title")[0].innerHTML;
      link = items[i].getElementsByTagName("link")[0].innerHTML;
      time = items[i].getElementsByTagName("pubDate")[0].innerHTML;
      mark = items[i].getElementsByTagName("description")[0].innerHTML;
      addItem(title, link, time, mark);
    }

    i++;
  }

  if (!haveResult) {
    document.getElementById("search-tip").innerText = "搜索完毕，未发现结果 ...";
    document.getElementById("search-tip").style.display = "block";
  }
} // add


function addItem(title, link, time, mark) {
  document.getElementById("search-tip").style.display = "none";
  tmpl = "<article class=\"post\" style=\"border-bottom: 1px solid #e6e6e6;\" >" + "<header class=\"post-header\">" + "<h1 class=\"post-title\"><a class=\"post-link\" href=\"" + link + "\" target=\"_blank\">" + title + "</a></h1>" + "<div class=\"post-meta\">" + " <span class=\"post-time\">" + time + "</span>" + "</div>" + " </header>" + "<div class=\"post-content\">" + "<div class=\"post-summary\">" + mark + "</div>" + "<div class=\"read-more\">" + "<a href=\"" + link + "\" class=\"read-more-link\" target=\"_blank\">阅读更多</a>" + "</div>" + " </div>" + "</article>";
  div = document.createElement("div");
  div.innerHTML = tmpl;
  document.getElementById('result').appendChild(div);
}
/*********************search.js end***************** */

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var container = document.querySelector(".container");
var menu = document.querySelector(".menu");
var mobileMenuTrigger = document.querySelector(".menu-trigger");
var desktopMenu = document.querySelector(".menu__inner--desktop");
var desktopMenuTrigger = document.querySelector(".menu__sub-inner-more-trigger");
var menuMore = document.querySelector(".menu__sub-inner-more");
var mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth");

var isMobile = function isMobile() {
  return window.matchMedia(mobileQuery).matches;
};

var handleMenuClasses = function handleMenuClasses() {
  mobileMenuTrigger && mobileMenuTrigger.classList.toggle("hidden", !isMobile());
  menu && menu.classList.toggle("hidden", isMobile());
  menuMore && menuMore.classList.toggle("hidden", !isMobile());
}; // Common


menu && menu.addEventListener("click", function (e) {
  return e.stopPropagation();
});
menuMore && menuMore.addEventListener("click", function (e) {
  return e.stopPropagation();
});
handleMenuClasses();
document.body.addEventListener("click", function () {
  if (!isMobile() && menuMore && !menuMore.classList.contains("hidden")) {
    menuMore.classList.add("hidden");
  } else if (isMobile() && !menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
});
window.addEventListener("resize", handleMenuClasses); // Mobile menu

mobileMenuTrigger && mobileMenuTrigger.addEventListener("click", function (e) {
  e.stopPropagation();
  menu && menu.classList.toggle("hidden");
}); // Desktop menu

desktopMenuTrigger && desktopMenuTrigger.addEventListener("click", function (e) {
  e.stopPropagation();
  menuMore && menuMore.classList.toggle("hidden");

  if (menuMore.getBoundingClientRect().right > container.getBoundingClientRect().right) {
    menuMore.style.left = "auto";
    menuMore.style.right = 0;
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth");

var isMobile = function isMobile() {
  return window.matchMedia(mobileQuery).matches;
};

if (!isMobile()) {
  languageSelector = document.querySelector(".language-selector-current");
  moreLanguagesContainer = document.querySelector(".language-selector__more");
  document.body.addEventListener("click", function () {
    if (moreLanguagesContainer && !moreLanguagesContainer.classList.contains("hidden")) {
      moreLanguagesContainer.classList.add("hidden");
    }
  });
  languageSelector && languageSelector.addEventListener("click", function (e) {
    e.stopPropagation();
    moreLanguagesContainer.classList.toggle("hidden");
  });
}

/***/ })
/******/ ]);