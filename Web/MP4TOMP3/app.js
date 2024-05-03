function convertToMp3() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  if (!file) {
      alert('Por favor selecciona un archivo MP4.');
      return;
  }
  
  const reader = new FileReader();
  reader.onload = function(event) {
      const data = event.target.result;
      const ffmpeg = require('@ffmpeg-installer/ffmpeg');
      const ffmpegPath = ffmpeg.path;
      const ffmpegjs = require('fluent-ffmpeg');
      ffmpegjs.setFfmpegPath(ffmpegPath);
      
      ffmpegjs(data)
          .toFormat('mp3')
          .save('output.mp3')
          .on('end', function() {
              alert('Conversión completada. Puedes descargar el archivo MP3.');
              document.getElementById('downloadLink').style.display = 'block';
          });
  };
  
  reader.readAsArrayBuffer(file);
}