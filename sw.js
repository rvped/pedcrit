/* Service worker — funciona sem internet e avisa quando há versão nova.
   Troque VERSAO a cada publicação para invalidar o cache. */
const VERSAO = "2026-09-17a";
const CACHE = "pedcrit-" + VERSAO;
const ARQUIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./qr.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-48.png",
  "./icons/maskable-512.png",
  "./qr.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => (k.startsWith("pedcrit-") || k.startsWith("analgo-")) && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (e) => {
  if (e.data === "atualizar") self.skipWaiting();
});

/* Página: rede primeiro (conteúdo clínico sempre atual), cache se estiver offline.
   Demais arquivos: cache primeiro. */
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((r) => { const copia = r.clone(); caches.open(CACHE).then((c) => c.put("./index.html", copia)); return r; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
