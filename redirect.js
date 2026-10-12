// 舊網址 → 新網址（網站已搬家）
(function () {
  var map = [
    ["/cheng-shuang-tools/order/admin.html", "https://chengshuang.pages.dev/order/admin"],
    ["/cheng-shuang-tools/", "https://chengshuang.pages.dev/"],
    ["/orchard-toys-guide/", "https://chengshuang-orchard.pages.dev/"],
    ["/veterinary-cards/", "https://chengshuang-vet.pages.dev/"],
    ["/cheng-shuang/", "https://cheng-shuang.netlify.app/"]
  ];
  var p = location.pathname, to = "https://chengshuang.pages.dev/";
  for (var i = 0; i < map.length; i++) {
    var from = map[i][0];
    if (p === from || p + "/" === from) { to = map[i][1]; break; }
    if (from.slice(-1) === "/" && p.indexOf(from) === 0) { to = map[i][1] + p.slice(from.length); break; }
  }
  location.replace(to + location.search + location.hash);
})();
