var qr;

function generarQR() {
    var texto = document.getElementById("textoInput").value;
    if (texto) {
        if (qr) {
            qr.clear(); // Borrar el QR anterior
            document.getElementById("qrCode").innerHTML = ''; // Eliminar el contenedor del QR anterior
        }
        
        qr = new QRCode(document.getElementById("qrCode"), {
            text: texto,
            width: 200,
            height: 200
        });

        document.getElementById("textoQR").innerHTML = "<p>" + texto + "</p>";
    } else {
        alert("Por favor, ingrese un texto o URL");
    }
}

function descargarQR() {
    if (!qr) {
        alert("Primero genera el código QR");
        return;
    }

    var canvas = document.getElementsByTagName('canvas')[0];
    var url = canvas.toDataURL("image/png");

    var link = document.createElement("a");
    link.href = url;
    link.download = "codigo_qr.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}