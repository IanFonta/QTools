function generarQR() {
    var texto = document.getElementById('textoInput').value;
    var qrCodeDiv = document.getElementById('qrCode');
    qrCodeDiv.innerHTML = ''; // Limpiar cualquier QR Code anterior

    if (texto.trim() !== '') {
        var qrCode = new QRCode(qrCodeDiv, {
            text: texto,
            width: 200,
            height: 200
        });
    } else {
        qrCodeDiv.innerHTML = '<p>Por favor, ingrese un texto válido.</p>';
    }
}
