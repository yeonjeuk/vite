importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");
workbox.setConfig({
  debug: !0
});
workbox.precaching.precacheAndRoute([{"revision":null,"url":"assets/index-d40d6541.js"},{"revision":null,"url":"assets/index-f217be3d.css"},{"revision":null,"url":"assets/webfontloader-523643f5.js"},{"revision":"6136cfca036af037b75b279d50e9c306","url":"index.html"},{"revision":"ab3cedaeaab6f9325c98e7abe76fb8c6","url":"registerSW.js"},{"revision":"951eaa5dcc734487158e7c747729576a","url":"manifest.webmanifest"}]);
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
