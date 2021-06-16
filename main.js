Webcam.set({
    width:310,
    height:265,
    image_format : 'png',
    png_quality:90,

    constraints: {
      facingMode: "environment"
    }
});
  camera = document.getElementById("camera");

Webcam.attach('#camera');