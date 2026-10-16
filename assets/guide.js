// Лайтбокс для картинок + подсветка текущей карты в списке
document.addEventListener("DOMContentLoaded", () => {
  const lb = document.createElement("div");
  lb.className = "lb";
  lb.innerHTML = "<img alt=''>";
  document.body.appendChild(lb);
  lb.addEventListener("click", () => lb.classList.remove("open"));
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
  document.querySelectorAll("main figure img").forEach(img => {
    img.loading = "lazy";
    img.addEventListener("click", () => { lb.firstChild.src = img.src; lb.classList.add("open"); });
  });
  const here = decodeURIComponent(location.pathname.split("/").pop());
  document.querySelectorAll(".sidebar .maps a").forEach(a => {
    if (decodeURIComponent(a.getAttribute("href")) === here) a.classList.add("active");
  });
});
