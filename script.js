// Loading Screen
window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 1500); // delay before fade out
});

// Show Main Content
function showMainContent() {
  const cover = document.getElementById("cover");
  const main = document.getElementById("main-content");

  cover.style.opacity = "0";
  setTimeout(() => {
    cover.style.display = "none";
    main.style.display = "block";
    main.style.opacity = "0";
    setTimeout(() => {
      main.style.opacity = "1";
    }, 100);
  }, 600); // fade transition
}
window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  loader.classList.add("fade-out");
  setTimeout(() => loader.remove(), 600);
});

function showMainContent() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}