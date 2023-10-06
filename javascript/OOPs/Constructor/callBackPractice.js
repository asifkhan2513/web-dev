function loadScript(src) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log(" script loaded with SRC " + src);
  };
  script.onerror = function () {
    console.log("script got some error" + src);
  };
}
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
);
