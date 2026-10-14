
window.YanMuhasebeBildirim = {
  async izinPenceresiAc() {
    if (!("Notification" in window)) return;
    if (Notification.permission !== "default") return;

    const pencere = document.createElement("div");
    pencere.style.cssText = `
      position:fixed;inset:0;background:#0008;z-index:99999;
      display:flex;align-items:center;justify-content:center;padding:20px;
      font-family:Arial,sans-serif;
    `;

    pencere.innerHTML = `
      <div style="background:white;color:#222;padding:24px;border-radius:16px;
        max-width:340px;width:100%;text-align:center">
        <h3>Bildirimleri onaylıyor musunuz?</h3>
        <p>YanMuhasebe; vade, abonelik ve hesap hareketleri hakkında bildirim gönderebilir.</p>
        <button id="ymOnayla" style="padding:12px 20px;background:#16834a;
          color:white;border:0;border-radius:8px">Onayla</button>
        <button id="ymReddet" style="padding:12px 20px;margin-left:8px;
          border:0;border-radius:8px">Şimdi değil</button>
      </div>`;

    document.body.appendChild(pencere);

    document.getElementById("ymReddet").onclick = () => pencere.remove();

    document.getElementById("ymOnayla").onclick = async () => {
      pencere.remove();
      try {
        await Notification.requestPermission();
      } catch (e) {
        console.log("Bildirim izni alınamadı.");
      }
    };
  }
};
