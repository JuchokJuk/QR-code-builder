const markets = {
  ios: {
    image: "images/appstore.svg",
    link: undefined,
  },
  android: {
    image: "images/googleplay.svg",
    link: undefined,
  },
};

const urlParams = new URLSearchParams(window.location.search);

markets.ios.link = urlParams.get("ios");
markets.android.link = urlParams.get("android");

const OS = getOS();

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
  } else {
    return undefined;
  }
}

switch (OS) {
  case "iOS":
    redirect(markets.ios);
    break;
  case "Android":
    redirect(markets.android);
    break;
  default:
    failureHandler();
}

function redirect(market) {
  if (market.link) {
    location.href = market.link;
  } else {
    failureHandler();
  }
}

function failureHandler() {
  if (markets.ios.link && markets.android.link) {
    const AppStoreButton = document.getElementById("App-Store-button");
    const GooglePlayButton = document.getElementById("Google-Play-button");
    const userSelect = document.getElementById("user-select");

    AppStoreButton.href = markets.ios.link;
    GooglePlayButton.href = markets.android.link;

    userSelect.classList.remove("user-select_hidden");
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.classList.remove("error-message_hidden");
  }
}
