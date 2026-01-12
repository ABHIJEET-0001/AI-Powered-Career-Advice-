// navigation.js - Handles page routing

export function navigateTo(page) {
  const currentPage = document.querySelector(".page.active");
  const targetPage = document.getElementById(page);

  if (currentPage) {
    currentPage.classList.remove("active");
  }

  if (targetPage) {
    targetPage.classList.add("active");
    targetPage.scrollIntoView({ behavior: "smooth" });
  }
}