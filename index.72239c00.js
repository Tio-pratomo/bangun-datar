// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dRBhr":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "2cff2d8c72239c00";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fMOQf":[function(require,module,exports) {
/* ------------------------------------------- IMPORT FROM CIRCLE SECTION ------------------------------------------- */ var _circleMjs = require("./circle.mjs");
/* ------------------------------------------- IMPORT FROM SQUARE SECTION ------------------------------------------- */ var _squareMjs = require("./square.mjs");
/* ------------------------------------------ IMPORT FROM RECTANGLE SECTION ----------------------------------------- */ var _rectangleMjs = require("./rectangle.mjs");
/* ---------------------------------------------- IMPORT FROM TRIANGLE ---------------------------------------------- */ var _triangleMjs = require("./triangle.mjs");
/* ---------------------------------------------- IMPORT FROM TRAPEZOID --------------------------------------------- */ var _trapezoidMjs = require("./trapezoid.mjs");
/* -------------------------------------------- IMPORT FROM PARALLELOGRAM ------------------------------------------- */ var _parallelogramMjs = require("./parallelogram.mjs");
/* ------------------------------------------------ SELECT ALL BUTTON ----------------------------------------------- */ const buttons = [
    ...document.querySelectorAll('button')
];
/* --------------------------------------- CALCULATE IF BUTTON CLICKED BY USER -------------------------------------- */ buttons.forEach((button)=>{
    button.addEventListener('click', function(event) {
        //* VALIDATION WHEN BUTTON HAS CLICKED BY USER
        const inputAllSection = [
            ...document.querySelectorAll('input')
        ];
        inputAllSection.forEach((inUser)=>{
            // WHEN USER INSERT UNDER ZERO NUMBER
            if (inUser.value < 0) inUser.value *= -1;
        });
        /* ------------------------------------------------ CIRCLE CALCULATE ------------------------------------------------ */ if (event.target.classList.contains('circle')) {
            //* IF THE INPUT VALUE IS NOT ENTERED (EMPTY)
            if (_circleMjs.inputCircle.value === '') _circleMjs.inputCircle.value = 0;
            //* DISPLAY EXPLANATION CALCULATION OF CIRCLE
            _circleMjs.explainationCircle.innerHTML = _circleMjs.listGroupCircle;
            //* SELECT ELEMENT SPAN.PHI
            const spanPhi = [
                ...document.querySelectorAll('.phi')
            ];
            // * SELECT ELEMENT SPAN INPUT USER
            const spanInputCircle = [
                ...document.querySelectorAll('.input-circle'), 
            ];
            // * TOTAL AREA CIRCLE
            const spanTotalAreaCircle = document.querySelector('.total-circle');
            //* TOTAL CIRCUMFERENCE(KELILING) CIRCLE
            const spanTotalCircumferenceCircle = document.querySelector('.total-circle-k');
            spanPhi.forEach((sPHI)=>{
                parseInt(_circleMjs.inputCircle.value) % 7 === 0 ? sPHI.innerHTML = '22/7' : sPHI.innerHTML = '3.14';
            });
            spanInputCircle.forEach((inCircle)=>{
                inCircle.innerHTML = parseInt(_circleMjs.inputCircle.value);
            });
            if (_circleMjs.inputCircle.value % 7 === 0) {
                spanTotalAreaCircle.innerHTML = parseInt(spanPhi[1].innerHTML) / 7 * Math.pow(spanInputCircle[1].innerHTML, 2);
                spanTotalCircumferenceCircle.innerHTML = 2 * parseInt(spanPhi[2].innerHTML) / 7 * spanInputCircle[3].innerHTML;
            } else {
                spanTotalAreaCircle.innerHTML = spanPhi[1].innerHTML * Math.pow(spanInputCircle[1].innerHTML, 2);
                spanTotalCircumferenceCircle.innerHTML = (2 * spanPhi[2].innerHTML * spanInputCircle[3].innerHTML).toFixed(2);
            }
        }
        /* ------------------------------------------------ SQUARE CALCULATE ------------------------------------------------ */ if (event.target.classList.contains('square')) {
            //* IF THE INPUT VALUE IS NOT ENTERED (EMPTY)
            if (_squareMjs.inputSquare.value === '') _squareMjs.inputSquare.value = 0;
            //* DISPLAY Square CALCULATION
            _squareMjs.explainationSquare.innerHTML = _squareMjs.listGroupSquare;
            //* LATERAL OF SQUARE
            const lateral = [
                ...document.querySelectorAll('.lateral')
            ];
            //* SQUARE AREA
            const squareArea = document.querySelector('.square-area');
            //* PERIMETER OF SQUARE
            const perimeterOfSquare = document.querySelector('.perimeter-of-square');
            lateral.forEach((lat)=>{
                lat.innerHTML = _squareMjs.inputSquare.value;
            });
            squareArea.innerHTML = Math.pow(parseInt(_squareMjs.inputSquare.value), 2);
            perimeterOfSquare.innerHTML = parseInt(_squareMjs.inputSquare.value) * 4;
        }
        /* ----------------------------------------------- RECTANGLE CALCULATE ---------------------------------------------- */ if (event.target.classList.contains('rectangle')) {
            //* IF THE INPUT VALUE IS NOT ENTERED (EMPTY)
            if (_rectangleMjs.inputRectangleWidth.value === '') _rectangleMjs.inputRectangleWidth.value = 0;
            if (_rectangleMjs.inputRectangleHeight.value === '') _rectangleMjs.inputRectangleHeight.value = 0;
            //* DISPLAY RECTANGLE CALCULATION
            _rectangleMjs.explainationRectangle.innerHTML = _rectangleMjs.listGroupRectangle;
            const spanRectangleWidth = document.querySelectorAll('.rectangle-width');
            const spanrectangleHeight = document.querySelectorAll('.rectangle-height');
            const rectangleArea = document.querySelector('.rectangle-area');
            const sumRectangleWidth = document.querySelector('.sum-rectangle-width');
            const sumRectangleHeight = document.querySelector('.sum-rectangle-height');
            const perimeterOfRectangle = document.querySelector('.perimeter-of-rectangle');
            spanRectangleWidth.forEach((spanRW)=>{
                spanRW.innerHTML = _rectangleMjs.inputRectangleWidth.value;
            });
            spanrectangleHeight.forEach((spanRH)=>{
                spanRH.innerHTML = _rectangleMjs.inputRectangleHeight.value;
            });
            rectangleArea.innerHTML = spanRectangleWidth[0].innerHTML * spanrectangleHeight[0].innerHTML;
            sumRectangleWidth.innerHTML = 2 * _rectangleMjs.inputRectangleWidth.value;
            sumRectangleHeight.innerHTML = 2 * _rectangleMjs.inputRectangleHeight.value;
            perimeterOfRectangle.innerHTML = parseInt(sumRectangleWidth.innerHTML) + parseInt(sumRectangleHeight.innerHTML);
        }
        /* ----------------------------------------------- TRIANGLE CALCULATE ----------------------------------------------- */ if (event.target.classList.contains('triangle')) {
            //* IF THE INPUT VALUE IS NOT ENTERED (EMPTY)
            _triangleMjs.inputOfTriangle.forEach((inTriangle)=>{
                if (inTriangle.value === '') inTriangle.value = 0;
            });
            _triangleMjs.explainationTriangle.innerHTML = _triangleMjs.listGroupTriangle;
            const spanTriangleBase = [
                ...document.querySelectorAll('span.triangle-base'), 
            ];
            const spanTriangleHeight = document.querySelector('span.triangle-height');
            const spanTriangleSumAt = document.querySelector('span.triangle-sum-at');
            const spanTriangleArea = document.querySelector('span.triangle-area');
            const spanTriangleB = document.querySelector('span.triangle-b');
            const spanTriangleC = document.querySelector('span.triangle-c');
            const spanPerimeterOfTriangle = document.querySelector('span.perimeter-of-triangle');
            spanTriangleBase.forEach((spanTB)=>{
                spanTB.innerHTML = _triangleMjs.inputOfTriangle[0].value;
            });
            spanTriangleHeight.innerHTML = _triangleMjs.inputOfTriangle[1].value;
            spanTriangleSumAt.innerHTML = parseInt(spanTriangleBase[0].innerHTML) * parseInt(spanTriangleHeight.innerHTML);
            spanTriangleArea.innerHTML = 1 * parseInt(spanTriangleSumAt.innerHTML) / 2;
            spanTriangleB.innerHTML = _triangleMjs.inputOfTriangle[2].value;
            spanTriangleC.innerHTML = _triangleMjs.inputOfTriangle[3].value;
            spanPerimeterOfTriangle.innerHTML = parseInt(spanTriangleBase[1].innerHTML) + parseInt(spanTriangleB.innerHTML) + parseInt(spanTriangleC.innerHTML);
        }
        /* ------------------------------------------- TRAPEZOID CALCULATE ------------------------------------------ */ if (event.target.classList.contains('trapezoid')) {
            //* IF THE INPUT VALUE IS NOT ENTERED (EMPTY)
            _trapezoidMjs.inputOfTrapezoid.forEach((inTrapezoid)=>{
                if (inTrapezoid.value === '') inTrapezoid.value = 0;
            });
            //* when user click button at trapezoid section, included explaination of trapezoid
            _trapezoidMjs.explainationTrapezoid.innerHTML = _trapezoidMjs.listGroupTrapezoid;
            //* SELECT ALL TAG SPAN CONTAIN class = "trapezoid-side-a"
            const spanTrapezoidSideA = [
                ...document.querySelectorAll('.trapezoid-side-a'), 
            ];
            const spanTrapezoidSideB = [
                ...document.querySelectorAll('.trapezoid-side-b'), 
            ];
            const spanTrapezoidSideC = document.querySelector('.trapezoid-side-c');
            const spanTrapezoidHeight = [
                ...document.querySelectorAll('.trapezoid-height'), 
            ];
            const calculateTrapezoidA = document.querySelector('.calculate-trapezoid-a');
            const trapezoidArea = document.querySelector('.trapezoid-area');
            const perimeterOfTrapezoid = document.querySelector('.perimeter-of-trapezoid');
            //* INSERT ALL TAG SPAN class="trapezoid-side-a" ACCORDING INPUT USER
            spanTrapezoidSideA.forEach((sideA)=>{
                sideA.innerHTML = _trapezoidMjs.inputOfTrapezoid[0].value;
            });
            spanTrapezoidSideB.forEach((sideB)=>{
                sideB.innerHTML = _trapezoidMjs.inputOfTrapezoid[2].value;
            });
            spanTrapezoidSideC.innerHTML = _trapezoidMjs.inputOfTrapezoid[3].value;
            spanTrapezoidHeight.forEach((spanHeight)=>{
                spanHeight.innerHTML = _trapezoidMjs.inputOfTrapezoid[1].value;
            });
            calculateTrapezoidA.innerHTML = (parseInt(spanTrapezoidSideA[0].innerHTML) + parseInt(spanTrapezoidSideB[0].innerHTML)) * parseInt(spanTrapezoidHeight[0].innerHTML);
            trapezoidArea.innerHTML = parseInt(calculateTrapezoidA.innerHTML) / 2;
            perimeterOfTrapezoid.innerHTML = parseInt(spanTrapezoidSideA[0].innerHTML) + parseInt(spanTrapezoidSideB[0].innerHTML) + parseInt(spanTrapezoidSideC.innerHTML) + parseInt(spanTrapezoidHeight[0].innerHTML);
        }
        /* ---------------------------------------- PARALLELOGRAM CALCULATION --------------------------------------- */ if (event.target.classList.contains('parallelogram')) {
            //* VALIDATION IF USER DIDNT INSERT INPUT VALUE
            _parallelogramMjs.inputOfParallelogram.forEach((input)=>{
                if (input.value === '') input.value = 0;
            });
            //* EXPLAINATION FOR CALCULATION OF PARALLELOGRAM
            _parallelogramMjs.explainationParallelogram.innerHTML = _parallelogramMjs.listGroupParallelogram;
            //* INSERT TAG SPAN class="parallelogram-side-a"
            const parallelogramA = [
                ...document.querySelectorAll('.parallelogram-side-a'), 
            ];
            parallelogramA.forEach((sideA)=>{
                sideA.innerHTML = _parallelogramMjs.inputOfParallelogram[0].value;
            });
            //* INSERT TAG SPAN class="parallelogram-side-b"
            const parallelogramB = [
                ...document.querySelectorAll('.parallelogram-side-b'), 
            ];
            parallelogramB.forEach((sideB)=>{
                sideB.innerHTML = _parallelogramMjs.inputOfParallelogram[2].value;
            });
            //* PARALLELOGRAM AREA
            const parallelogramHeight = document.querySelector('.parallelogram-height');
            const parallelogramArea = document.querySelector('.parallelogram-area');
            parallelogramHeight.innerHTML = _parallelogramMjs.inputOfParallelogram[1].value;
            parallelogramArea.innerHTML = parseInt(parallelogramA[0].innerHTML) * parseInt(parallelogramHeight.innerHTML);
            //* PERIMETER OF PARALLELOGRAM
            const perimeterOfParallelogram = document.querySelector('.perimeter-of-parallelogram');
            perimeterOfParallelogram.innerHTML = 2 * _parallelogramMjs.inputOfParallelogram[0].value + 2 * _parallelogramMjs.inputOfParallelogram[2].value;
        }
    });
});

},{"./circle.mjs":"ldRv3","./square.mjs":"9uQOB","./rectangle.mjs":"irXmc","./triangle.mjs":"hbhBv","./trapezoid.mjs":"2qzAC","./parallelogram.mjs":"74Wja"}],"ldRv3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* ----------------------------------------------- END CIRCLE SECTION ----------------------------------------------- */ parcelHelpers.export(exports, "listGroupCircle", ()=>listGroupCircle
);
parcelHelpers.export(exports, "explainationCircle", ()=>explainationCircle
);
parcelHelpers.export(exports, "inputCircle", ()=>inputCircle
);
/* ------------------------------------------------ CIRCLE SECTION ----------------------------------------------- */ //* EXPLAINATION CIRCLE SECTION
const listGroupCircle = /* html */ `
<ul class="list-group list-group-flush">
    <li class="list-group-item">
        Luas = <span class="phi"></span> x <span class="input-circle"></span><sup>2</sup>
    </li>
    <li class="list-group-item">
        Luas = <span class="phi"></span> x <span class="input-circle"></span> x <span class="input-circle"></span> = <span
            class="total-circle"></span>
    </li>
    <li class="list-group-item">
        Keliling = 2 x <span class="phi"></span> x <span class="input-circle"></span> =
        <span class="total-circle-k"></span>
    </li>
</ul>
`;
//* SELECT ELEMENT HAS CLASS EXPLAINATION CIRCLE
const explainationCircle = document.querySelector('.explaination-circle');
//* SELECTION ELEMENT INPUT CIRCLE
const inputCircle = document.querySelector('input[name = "number-circle"]');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9uQOB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* ---------------------------------------------- END Square SECTION --------------------------------------------- */ parcelHelpers.export(exports, "listGroupSquare", ()=>listGroupSquare
);
parcelHelpers.export(exports, "explainationSquare", ()=>explainationSquare
);
parcelHelpers.export(exports, "inputSquare", ()=>inputSquare
);
/* ------------------------------------------------ SQUARE SECTION ----------------------------------------------- */ //* EXPLAINATION Square SECTION
const listGroupSquare = /* html */ `
<ul class="list-group list-group-flush">
    <li class="list-group-item">
        Luas = <span class="lateral"></span> x <span class="lateral"></span> = <span class="square-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="lateral"></span> x 4 = <span class="perimeter-of-square"></span>
    </li>
</ul>
`;
//* SELECT ELEMENT HAS CLASS EXPLAINATION Square
const explainationSquare = document.querySelector('.explaination-square');
//* SELECT INPUT ELEMENT Square SECTION
const inputSquare = document.querySelector('input[name = "number-square"]');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"irXmc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* ---------------------------------------------- END RECTANGLE SECTION --------------------------------------------- */ parcelHelpers.export(exports, "listGroupRectangle", ()=>listGroupRectangle
);
parcelHelpers.export(exports, "explainationRectangle", ()=>explainationRectangle
);
parcelHelpers.export(exports, "inputRectangleWidth", ()=>inputRectangleWidth
);
parcelHelpers.export(exports, "inputRectangleHeight", ()=>inputRectangleHeight
);
/* ------------------------------------------------ RECTANGLE SECTION ----------------------------------------------- */ //* EXPLANIATION RECTANGLE SECTION
const listGroupRectangle = /* html */ `
<ul class="list-group list-group-flush">
    <li class="list-group-item">
        Luas = <span class="rectangle-width"></span> x <span class="rectangle-height"></span> = <span class="rectangle-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = ( 2 x <span class="rectangle-width"></span> ) + ( 2 x <span class="rectangle-height"></span> )
    </li>
    <li class="list-group-item">
        Keliling = <span class="sum-rectangle-width"></span> + <span class="sum-rectangle-height"></span> = <span class="perimeter-of-rectangle"></span>
    </li>
</ul>
`;
//* SELECT ELEMENT HAS CLASS EXPLAINATION RECTANGLE
const explainationRectangle = document.querySelector('.explaination-rectangle');
//* SELECT INPUT ELEMENT RECTANGLE SECTION
const inputRectangleWidth = document.querySelector('input[name = "number-width"]');
const inputRectangleHeight = document.querySelector('input[name = "number-height"]');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hbhBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* ---------------------------------------------- END TRIANGLE SECTION ---------------------------------------------- */ parcelHelpers.export(exports, "listGroupTriangle", ()=>listGroupTriangle
);
parcelHelpers.export(exports, "explainationTriangle", ()=>explainationTriangle
);
parcelHelpers.export(exports, "inputOfTriangle", ()=>inputOfTriangle
);
/* --------------------------------------------- START TRIANGLE SECTION --------------------------------------------- */ //* EXPLAINATION FOR TRIANGLE
const listGroupTriangle = /* html */ `
<ul class="list-group list-group-flush">
    <li class="list-group-item">
        Luas = 1/2 x <span class="triangle-base"></span> x <span class="triangle-height"></span>
    </li>
    <li class="list-group-item">
        Luas = 1/2 x <span class="triangle-sum-at"></span> = <span class="triangle-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="triangle-base"></span> + <span class="triangle-b"></span> + <span class="triangle-c"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="perimeter-of-triangle"></span>
    </li>
</ul>
`;
//* EXPLAINATION TRIANGLE SECTION
const explainationTriangle = document.querySelector('.explaination-triangle');
//* SELECT INPUT OF TRIANGLE
const inputOfTriangle = [
    ...document.querySelectorAll('.form-group.triangle input'), 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2qzAC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* ---------------------------------------------- END TRAPEZOID SECTION --------------------------------------------- */ parcelHelpers.export(exports, "listGroupTrapezoid", ()=>listGroupTrapezoid
);
parcelHelpers.export(exports, "explainationTrapezoid", ()=>explainationTrapezoid
);
parcelHelpers.export(exports, "inputOfTrapezoid", ()=>inputOfTrapezoid
);
/* --------------------------------------------- START TRAPEZOID SECTION --------------------------------------------- */ //* EXPLAINATION FOR TRAPEZOID
const listGroupTrapezoid = /* html */ `
<ul class="list-group list-group-flush">
    <li class="list-group-item">
        Luas = ( <span class="trapezoid-side-a"></span> + <span class="trapezoid-side-b"></span> ) x <span class="trapezoid-height"></span> ÷ 2
    </li>
    <li class="list-group-item">
        Luas = <span class="calculate-trapezoid-a"></span> ÷ 2 =  <span class="trapezoid-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="trapezoid-side-a"></span> + <span class="trapezoid-side-b"></span> + <span class="trapezoid-side-c"></span> + <span class="trapezoid-height"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="perimeter-of-trapezoid"></span>
    </li>
</ul>
`;
//* EXPLAINATION TRAPEZOID
const explainationTrapezoid = document.querySelector('.explaination-trapezoid');
//* SELECT INPUT FOR TRAPEZOID
const inputOfTrapezoid = [
    ...document.querySelectorAll('.form-group.trapezoid input'), 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"74Wja":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* -------------------------------------------- END PARALLELOGRAM SECTION ------------------------------------------- */ parcelHelpers.export(exports, "listGroupParallelogram", ()=>listGroupParallelogram
);
parcelHelpers.export(exports, "explainationParallelogram", ()=>explainationParallelogram
);
parcelHelpers.export(exports, "inputOfParallelogram", ()=>inputOfParallelogram
);
/* ------------------------------------------- START PARALLELOGRAM SECTION ------------------------------------------ */ //* EXPLAINATION FOR PARALLELOGRAM
const listGroupParallelogram = /* html */ `
<ul class="list-group list-group-flush">
    <li class="list-group-item">
        Luas = <span class="parallelogram-side-a"></span> x <span class="parallelogram-height"></span> = <span class="parallelogram-area"></span>
    </li>
    
    <li class="list-group-item">
        Keliling = <span class="parallelogram-side-a"></span> + <span class="parallelogram-side-b"></span> + <span class="parallelogram-side-a"></span> + <span class="parallelogram-side-b"></span>
    </li>

    <li class="list-group-item">
        Keliling = <span class="perimeter-of-parallelogram"></span>
    </li>
</ul>
`;
//* PARENT PARALLELOGRAM
const explainationParallelogram = document.querySelector('.explaination-parallelogram');
//* SELECT ALL INPUT PARALLELOGRAM
const inputOfParallelogram = [
    ...document.querySelectorAll('.form-group.parallelogram input'), 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["dRBhr","fMOQf"], "fMOQf", "parcelRequiree841")

//# sourceMappingURL=index.72239c00.js.map
