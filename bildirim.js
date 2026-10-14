
window.YanMuhasebeBildirim = {
  async izinIste() {
    if (!("Notification" in window)) return;

    if (Notification.permission === "granted") return;

    if (Notification.permission === "denied") {
      alert("Bildirim iznini iPhone ayarlarından açabilirsin.");
      return;
    }

    const izin = await Notification.requestPermission();

    if (izin === "granted") {
      const kayit = await navigator.serviceWorker.ready;
      await kayit.showNotification("YanMuhasebeMobil", {
        body: "Bildirimler başarıyla etkinleştirildi."
      });
    }
  }
};

window.addEventListener("load", () => {
  if (Notification.permission === "default") {
    const buton = document.createElement("button");
    buton.textContent = "Bildirimleri Etkinleştir";
    buton.onclick = () => window.YanMuhasebeBildirim.izinIste();
    document.body.prepend(buton);
  }
});
