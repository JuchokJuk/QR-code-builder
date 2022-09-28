const link = document.getElementById("QR-code-builder__URL");
const URLInputIOS = document.getElementById("URL-input-iOS");
const URLInputAndroid = document.getElementById("URL-input-android");
const canvas = document.getElementById("canvas");
const QRCodeBuilderResult = document.getElementById('QR-code-builder__result')

let queryString = createQueryString({
  ios: URLInputIOS.value,
  android: URLInputAndroid.value,
});

let url = `${window.location.origin}/?${queryString}`;

render();

function render() {
    if(URLInputIOS.value.length !== 0 && URLInputAndroid.value.length !== 0){
        QRCode.toCanvas(canvas, url);
        link.href = url;
        link.innerText = url;

        QRCodeBuilderResult.classList.remove('QR-code-builder__result_hidden')

    }else{
        QRCodeBuilderResult.classList.add('QR-code-builder__result_hidden')
    }
}

function inputHandler() {
  queryString = createQueryString({
    ios: URLInputIOS.value,
    android: URLInputAndroid.value,
  });

  url = `${window.location.origin}/?${queryString}`;

  render();
}

function createQueryString(objectParams) {
  return new URLSearchParams(objectParams).toString();
}

URLInputIOS.addEventListener("input", inputHandler, false);
URLInputAndroid.addEventListener("input", inputHandler, false);
