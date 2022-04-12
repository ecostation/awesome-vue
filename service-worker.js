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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "365ec080688f01b921912c49860b8cd5"
  },
  {
    "url": "assets/css/0.styles.b96b8e36.css",
    "revision": "80d9a84c14fa3bd759f2f87a32ea6953"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ad1efe2d.js",
    "revision": "f9f95e4ee0b4abbd27edbe5a19f1dd08"
  },
  {
    "url": "assets/js/11.71a3dce7.js",
    "revision": "8066a4bc1c5bd26f1bed8d90c37483ec"
  },
  {
    "url": "assets/js/12.e8a4e679.js",
    "revision": "dc4b8b553c70feb18e7c5738e0869d91"
  },
  {
    "url": "assets/js/13.17cc2f5b.js",
    "revision": "338ac192a45f01dd1b69437e4b58c16a"
  },
  {
    "url": "assets/js/14.80c90d49.js",
    "revision": "f3054453977f32e3b940d5a662d439d0"
  },
  {
    "url": "assets/js/15.0916156a.js",
    "revision": "983520625fc3558fd4ac229aee0e57c7"
  },
  {
    "url": "assets/js/16.0210eaad.js",
    "revision": "35a5dd5368a4a87901a84f4e05f1551b"
  },
  {
    "url": "assets/js/17.72c740eb.js",
    "revision": "0c9737fc2b6c1cedd3a41ec42701d1ac"
  },
  {
    "url": "assets/js/18.8bf6a362.js",
    "revision": "9adb9b8139bb1014b0ee3f838ed3a4bd"
  },
  {
    "url": "assets/js/19.81854779.js",
    "revision": "74b4b9cf2a1ea55bdad27a79f213be7d"
  },
  {
    "url": "assets/js/20.68f1e4ff.js",
    "revision": "74f555d8c8bd027e6358edbb07cfed32"
  },
  {
    "url": "assets/js/21.5fa9e12e.js",
    "revision": "85c1d4fc540fe66e1f8cac05f3b9a184"
  },
  {
    "url": "assets/js/22.a279ff63.js",
    "revision": "1c197c20aebc24b954c7d853850ec55b"
  },
  {
    "url": "assets/js/23.ba1677f6.js",
    "revision": "964179babedac88c4cc3f150baf5fb4f"
  },
  {
    "url": "assets/js/24.a675ea4c.js",
    "revision": "6b87a1e56f70b9a14f2ebfdf722756d2"
  },
  {
    "url": "assets/js/25.2bc3d83e.js",
    "revision": "c906218e7f8023947a4e566abecd87c8"
  },
  {
    "url": "assets/js/26.bb8ac2df.js",
    "revision": "0351915259e9c567d270fd142192c16d"
  },
  {
    "url": "assets/js/27.a2634124.js",
    "revision": "2155b83a811063f38c4510f99e00e407"
  },
  {
    "url": "assets/js/28.bfb45528.js",
    "revision": "05567f731cce87cbed29be6ee039146e"
  },
  {
    "url": "assets/js/29.3a6f99fb.js",
    "revision": "5c09d0d8ddfe0b866417433c3d166317"
  },
  {
    "url": "assets/js/3.f8b946fb.js",
    "revision": "71698646a9bdd3d4969b52c0a3279e8e"
  },
  {
    "url": "assets/js/30.8a0a36e5.js",
    "revision": "0c8769a8c0148d4a4428701623eed6b5"
  },
  {
    "url": "assets/js/31.d90fd33c.js",
    "revision": "2e1f5bb1aaff08629940192ff2c273e2"
  },
  {
    "url": "assets/js/32.e678aa13.js",
    "revision": "8bc324c86f4d9a7d20f06cb4a2f86d5d"
  },
  {
    "url": "assets/js/33.21fc4dba.js",
    "revision": "391bcaae9f6b5e179208576b24f1ad74"
  },
  {
    "url": "assets/js/34.418c7827.js",
    "revision": "0559a6113d9130c372122d4c56583334"
  },
  {
    "url": "assets/js/35.0dfbaa7c.js",
    "revision": "f45fa182888fe42cd65a488e82250baa"
  },
  {
    "url": "assets/js/36.d4e9b1c1.js",
    "revision": "bf96a81f49e3077f6372693869e7ff3d"
  },
  {
    "url": "assets/js/37.7087a243.js",
    "revision": "8b46c8b2f71ec7216b396981e5ccca08"
  },
  {
    "url": "assets/js/38.f2cda610.js",
    "revision": "2232f681a6f973b0b55388bce8f78cf2"
  },
  {
    "url": "assets/js/39.3e58b032.js",
    "revision": "83d090b25ecd6badaa64033d612445ad"
  },
  {
    "url": "assets/js/4.18e1e21e.js",
    "revision": "c1a2ee47171f22683b92998ff482addc"
  },
  {
    "url": "assets/js/40.d6817988.js",
    "revision": "91bdb74ede6d546fc7099a595b18fb0c"
  },
  {
    "url": "assets/js/41.bb9c183c.js",
    "revision": "3126c6bc92699ceffc6a5cfbfbb28e42"
  },
  {
    "url": "assets/js/5.6e0127fe.js",
    "revision": "47a85067df82533d6e4f50295a2c7b8b"
  },
  {
    "url": "assets/js/6.59b14bd7.js",
    "revision": "a58914e28fda332e389f2639320ef71c"
  },
  {
    "url": "assets/js/7.030d45bf.js",
    "revision": "5ad564660e8d2e7cc8b28dae405c5165"
  },
  {
    "url": "assets/js/8.7a177cf6.js",
    "revision": "7a90425f083be40894a7f06a40df98fe"
  },
  {
    "url": "assets/js/9.63db73e0.js",
    "revision": "cbba0b303aaf166b2401f92103323c02"
  },
  {
    "url": "assets/js/app.e734664e.js",
    "revision": "6daea5bb482a28deb77de0830ccf1fc3"
  },
  {
    "url": "assets/js/vendors~docsearch.901f11e7.js",
    "revision": "f86793d15e9c7abc645643e3a2746e56"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "fb24ad121136c7005af6b148a76ef222"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "15e18953ca771cb86148acda94911435"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "25c91464cd575a1a9aade349cfea5928"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "ab784cff9a03e1c883fa80784836b6d4"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "71d420dbe393e92b051a506675465da0"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "7eff67ea1b06d5bc84093bbfef35884e"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "6a1b5e53d68a1633b4d40cc1bab945ad"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a54e64a31610c9c7403ef8c8594e7e77"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "600c196ad64ca6506a8884bc56f1d57d"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "2dc1d9c20b2475ccf638d7b2ec604358"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "be2cc88915854537b865ebcf5d7f52eb"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "e1520714e255ea0dbe82b823bedd8b73"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "451de534d3fd7a4b52690db95f221539"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "1e36daa7ed952dcc70a1d2b84baff363"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f380d2e09f2755c8f9856a2433a630ea"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "5a4e2602c64f9eccaf320c551c018e3e"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "a9935ef52e1f539f4d46d9c2077c1327"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "1b217cbde75f6e2f7f669aab6d6733e1"
  },
  {
    "url": "resources/books.html",
    "revision": "f2c826a7a1393fa1a3f7c2a59d17b12a"
  },
  {
    "url": "resources/community.html",
    "revision": "edcd3f77a97cbb9bc523bb510686b8e1"
  },
  {
    "url": "resources/conferences.html",
    "revision": "a1128b41138f8b2df331dece9a995c20"
  },
  {
    "url": "resources/courses.html",
    "revision": "eb47cc22decfdc1d060e9cfda1fbe746"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "07f0ccad707102e223dbbb745170e447"
  },
  {
    "url": "resources/examples.html",
    "revision": "b22a0e1fde2cd969adf652021c964bcf"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "3a1f572543e40461dda00e7b5b52a77a"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "e4e44aabf16c2d586ccff258a207a849"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "6b468c01675d53d5bce7febd802ff309"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "442cef4f12cc6aca6bda4c6dc25d3d32"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "0baab9e9607928fc014114c48735e2b0"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "f4906ed2b2f2549d38d07ec023d841c6"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "1f95e6f812897eb5dc62d7c35b164202"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
