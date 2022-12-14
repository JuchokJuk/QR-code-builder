function setColorScheme(scheme) {
  let root = document.documentElement;
  switch (scheme) {
    case "dark":
      root.style.setProperty("--surface-1", "hsl(185, 5%, 9%)");
      root.style.setProperty("--surface-2", "hsl(185, 5%, 14%)");
      root.style.setProperty("--surface-3", "hsl(185, 3%, 19%)");
      root.style.setProperty("--line-1", "hsl(185, 12%, 83%)");
      root.style.setProperty("--line-2", "hsl(185, 11%, 67%)");
      root.style.setProperty("--line-3", "hsl(185, 5%, 35%)");

      changeFavicon("images/favicon-light.svg");
      break;

    case "light":
      root.style.setProperty("--surface-1", "hsl(185, 25%, 98%)");
      root.style.setProperty("--surface-2", "hsl(185, 17%, 94%)");
      root.style.setProperty("--surface-3", "hsl(185, 12%, 90%)");
      root.style.setProperty("--line-1", "hsl(185, 3%, 30%)");
      root.style.setProperty("--line-2", "hsl(185, 5%, 35%)");
      root.style.setProperty("--line-3", "hsl(185, 5%, 75%)");

      changeFavicon("images/favicon-dark.svg");
      break;
  }
}

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  setColorScheme("dark");
} else {
  setColorScheme("light");
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";
    setColorScheme(newColorScheme);
  });

document.head = document.head || document.getElementsByTagName("head")[0];

function changeFavicon(src) {
  const link = htmlToElement(
    `<link rel="icon" type="image/svg+xml" sizes="any" href="${src}" id="dynamic-favicon"/>`
  );
  const oldLink = document.getElementById("dynamic-favicon");

  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}
