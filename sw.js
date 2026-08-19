const CACHE_NAME = 'isotope-dash-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
  // หากมีไฟล์ css หรือ js แยกต่างหาก ให้ใส่เส้นทางไฟล์เพิ่มตรงนี้ เช่น './style.css', './script.js'
];

// ติดตั้ง Service Worker และ Cache ไฟล์
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// เรียกใช้งานไฟล์จาก Cache เมื่อออฟไลน์
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
