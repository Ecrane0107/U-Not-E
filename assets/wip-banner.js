/*
 * Thin "In progress" banners pinned to the very top and bottom of every
 * page in this repo -- one shared script so the wording and styling only
 * need updating in one place.
 *
 * The banners also declare the space they take by setting --chrome-top
 * and --chrome-bottom. The site bar and every page laid out against it
 * are written in terms of those, so nothing else has to know these
 * strips exist -- which is what the per-page offset bumps used to do,
 * one stylesheet at a time, and kept getting lost.
 */
(function () {
  var BANNER_H = 24; // px -- published to CSS below, so nothing hardcodes it

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
    ".wip-banner.wip-bottom{bottom:0}" +
    ":root{--chrome-top:" + BANNER_H + "px;--chrome-bottom:" + BANNER_H + "px}";
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
