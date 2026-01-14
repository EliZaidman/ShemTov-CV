
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("zoomable")) {
    const src = e.target.getAttribute("src");
    const overlay = document.createElement("div");
    overlay.style.position="fixed";
    overlay.style.top="0";
    overlay.style.left="0";
    overlay.style.width="100%";
    overlay.style.height="100%";
    overlay.style.background="rgba(0,0,0,0.8)";
    overlay.style.display="flex";
    overlay.style.alignItems="center";
    overlay.style.justifyContent="center";
    overlay.style.zIndex="9999";
    overlay.innerHTML = `<img src="${src}" style="max-width:90%;max-height:90%;">`;
    overlay.onclick = ()=>overlay.remove();
    document.body.appendChild(overlay);
  }
});
