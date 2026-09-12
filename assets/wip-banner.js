/*
 * Thin "In progress" banners pinned to the very top and bottom of every
 * page in this repo -- one shared script so the wording/styling only
 * needs updating in one place. Fixed positioning (not normal flow) so
 * it behaves the same on an ordinary scrolling page and on a 100dvh app
 * shell (from-bits-to-models' graph view) -- pages with their own
 * fixed-position chrome near the edges (the topbar, the booklet
 * reader's close button, the graph shell itself) have their offsets
 * bumped in their own stylesheet to clear BANNER_H below.
 */
(function () {
  var BANNER_H = 24; // px -- keep in sync with the offset bumps in each page's CSS

  var style = document.createElement("style");
  style.textContent =
    ".wip-banner{" +
    "position:fixed;left:0;right:0;height:" + BANNER_H + "px;" +
    "display:flex;align-items:center;justify-content:center;" +
    "background:#1f7a45;color:#eafff0;" +
    "font:700 11px \"Space Grotesk\",system-ui,sans-serif;" +
    "letter-spacing:.14em;text-transform:uppercase;" +
    "z-index:99999;pointer-events:none;" +
    "}" +
    ".wip-banner.wip-top{top:0}" +
    ".wip-banner.wip-bottom{bottom:0}";
  document.head.appendChild(style);

  function makeBanner(cls) {
    var el = document.createElement("div");
    el.className = "wip-banner " + cls;
    el.textContent = "In progress";
    return el;
  }
  document.body.prepend(makeBanner("wip-top"));
  document.body.appendChild(makeBanner("wip-bottom"));
})();
