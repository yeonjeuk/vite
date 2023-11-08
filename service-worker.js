importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");
workbox.setConfig({
  debug: !0
});
workbox.precaching.precacheAndRoute([{"revision":null,"url":"assets/index-119a80bb.css"},{"revision":null,"url":"assets/index-41e469c3.js"},{"revision":null,"url":"assets/webfontloader-523643f5.js"},{"revision":"d581b6acd419e318dc11097b4960416e","url":"index.html"},{"revision":"ab3cedaeaab6f9325c98e7abe76fb8c6","url":"registerSW.js"},{"revision":"46431694a7b1e416e71a6265e36ec1f5","url":"manifest.webmanifest"}]);
workbox.routing.registerRoute(
  new RegExp("https://firebasestorage.googleapis.com/v0/b/pwa-camera.appspot.com/.*"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "camera-images",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        // <-- ExpirationPlugin로 대문자 'E' 변경
        maxEntries: 60,
        maxAgeSeconds: 365 * 24 * 60 * 60
        // 1년 지정
      })
    ]
  })
);
