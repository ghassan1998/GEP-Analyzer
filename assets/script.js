// ============================================================
// GEP Expression Analyzer — landing page interactions
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  // ---- Screenshot gallery tabs ----
  var tabs = document.querySelectorAll(".gallery-tab");
  var frameImg = document.getElementById("gallery-image");
  var caption = document.getElementById("gallery-caption");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      frameImg.style.opacity = 0;
      window.setTimeout(function () {
        frameImg.src = tab.getAttribute("data-src");
        caption.textContent = tab.getAttribute("data-caption");
        frameImg.style.opacity = 1;
      }, 120);
    });
  });

  // ---- YouTube video embed ----
  // To add your tutorial video: paste the YouTube video ID below
  // (the part after "v=" in the YouTube URL) between the quotes.
  // Example: "dQw4w9WgXcQ"
  var YOUTUBE_VIDEO_ID = "PtV1_waJb1c"; // <-- put your video ID here

  var videoFrame = document.getElementById("video-frame");
  if (YOUTUBE_VIDEO_ID.trim() !== "") {
    videoFrame.innerHTML =
      '<iframe src="https://www.youtube.com/embed/' + YOUTUBE_VIDEO_ID +
      '" title="GEP Expression Analyzer tutorial" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
      'allowfullscreen></iframe>';
  }
});
