const OS = getOS();
const userSelect = document.getElementById("user-select");

if (OS === "iOS") {
  // location.href =
  //   "https://apps.apple.com/ru/app/chrome-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80-%D0%BE%D1%82-google/id535886823";
  console.log("success. iOS detected", navigator.userAgent);
} else if (OS === "Android") {
  // location.href =
  //   "https://play.google.com/store/apps/details?id=com.android.chrome";
  console.log("success. Android detected", navigator.userAgent);
} else if (OS === "Windows Phone") {
  // location.href =
  //   "https://www.microsoft.com/en-in/p/google/9wzdncrfhx3w?activetab=pivot:overviewtab";
  console.log("success. Windows Phone detected", navigator.userAgent);
} else {
  console.log("failure", navigator.userAgent);
  failureHandler();
}

function getOS() {
  const userAgentString = navigator.userAgent;
  if (
    userAgentString.indexOf("iPhone") !== -1 ||
    userAgentString.indexOf("iPod") !== -1 ||
    userAgentString.indexOf("iPad") !== -1
  ) {
    return "iOS";
  } else if (/Android/.test(userAgentString)) {
    return "Android";
  } else if (/Windows Phone/.test(userAgentString)) {
    return "Windows Phone";
  } else {
    return undefined;
  }
}

function failureHandler() {
  document.getElementById("test").style.opacity = "0.25";
  userSelect.classList.remove("hidden");
  document.getElementById("test").innerText = navigator.userAgent;
}
