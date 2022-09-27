const markets = {
  ios: {
    image: "images/appstore.svg",
    link: "https://apps.apple.com/ru/app/lappli-soci%C3%A9t%C3%A9-g%C3%A9n%C3%A9rale/id376991016",
  },
  android: {
    image: "images/googleplay.svg",
    link: "https://play.google.com/store/apps/details?id=mobi.societegenerale.mobile.lappli&hl=ru&gl=US",
  },
  windowsPhone: {
    image: undefined,
    link: undefined,
  },
};

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
  } else if (/Windows Phone/.test(userAgentString)) {
    return "Windows Phone";
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
  case "Windows Phone":
    redirect(markets.windowsPhone);
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
  const userSelectLinks = document.getElementById("user-select__links");
  Object.keys(markets).forEach((market) => {
    if(markets[market].link){
      const link = htmlToElement(
        `<a href="${markets[market].link}">
          <img src="${markets[market].image}">
        </a>`
      );
      userSelectLinks.appendChild(link)
    }
  });
  const userSelect = document.getElementById("user-select");
  userSelect.classList.remove("user-select_hidden");
}
