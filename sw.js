const CACHE = 'dist-eletronica-v19';

const FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './imagens/linus_pauling.png',
  './audio/correto.mp3',
  './audio/applause.mp3',
  './audio/dialogo1.mp3',
  './audio/dialogo1.1.mp3',
  './audio/dialogo1.2.mp3',
  './audio/dialogo1.3.mp3',
  './audio/dialogo2.mp3',
  './audio/dialogo3.mp3',
  './audio/dialogo4.mp3',
  './audio/dialogo5.mp3',
  './audio/dialogo6.mp3',
  './audio/dialogo7.mp3',
  './audio/dialogo8.mp3',
  './audio/dialogo8.1.mp3',
  './audio/dialogo8.2.mp3',
  './audio/dialogo8.3.mp3',
  './audio/dialogo8.4.mp3',
  './audio/dialogo9.mp3',
  './audio/dialogo10.mp3',
  './audio/dialogo10.1.mp3',
  './audio/dialogo10.5.mp3',
  './audio/dialogo11.mp3',
  './audio/dialogo11.1.mp3',
  './audio/dialogo11.2.mp3',
  './audio/dialogo11.3.mp3',
  './audio/dialogo12.mp3',
  './audio/dialogo13.mp3',
  './audio/dialogo13.1.mp3',
  './audio/dialogo13.2.mp3',
  './audio/encaixe.mp3',
  './audio/finalaudio.mp3',
  './audio/funfare.mp3',
  './audio/lowscore.mp3',
  './audio/no.mp3',
  './audio/statistics.mp3',
  './audio/yes.mp3'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// network-first: sempre tenta a versão mais nova; cai no cache só se offline
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
