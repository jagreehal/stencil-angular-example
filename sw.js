/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/stencil-angular-example.js",
    "revision": "6e364225f7138400e135eaa2f1b7b092"
  },
  {
    "url": "build/stencil-angular-example/9num2l2g.es5.js",
    "revision": "3be8851cbdb74d560425f6d739ebbac9"
  },
  {
    "url": "build/stencil-angular-example/9num2l2g.js",
    "revision": "7c3dfc5c57b2e34dab09a2fe1c8fc3b5"
  },
  {
    "url": "build/stencil-angular-example/stencil-angular-example.7ks0dcop.js",
    "revision": "92d3f04da1a3455e8234afc9dd44b0b7"
  },
  {
    "url": "build/stencil-angular-example/stencil-angular-example.bsiesefu.js",
    "revision": "6ed821a61e665ce879e3019361468e3a"
  },
  {
    "url": "index.html",
    "revision": "9bcd70599f3a039ff3a33a88ac051c10"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
