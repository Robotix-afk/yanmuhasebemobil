window.YanMuhasebeBildirim = {
  async izinIste() {
    if (!("Notification" in window)) {
      alert("Bu tarayıcı bildirimleri desteklemiyor.");
      return;
    }

    const izin = await Notification.requestPermission();

    if (izin !== "granted") {
      alert("Bildirim izni verilmedi.");
      return;
    }

    const kayit = await navigator.serviceWorker.ready;

    await kayit.showNotification("YanMuhasebe", {
      body: "Bildirim izni başarıyla etkinleştirildi."
    });
  }
};
