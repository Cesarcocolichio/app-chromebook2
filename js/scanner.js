Html5Qrcode.getCameras().then(devices => {
  // Tenta encontrar a câmera traseira
  const rearCamera = devices.find(cam => cam.label.toLowerCase().includes("back")) || devices[devices.length - 1];

  scanner.start(
    rearCamera.id,
    { fps: 10, qrbox: 250 },
    qrCodeMessage => {
      const url = `https://script.google.com/macros/s/.../exec?id=${qrCodeMessage}&acao=devolver`;
      fetch(url).then(res => res.text()).then(msg => alert(msg));
    }
  );
});