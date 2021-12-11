let div = document.querySelector(".red-box");
window.addEventListener("mousemove", (e) => {
  div.textContent = `${e.clientX}, ${e.clientY}`;
});
