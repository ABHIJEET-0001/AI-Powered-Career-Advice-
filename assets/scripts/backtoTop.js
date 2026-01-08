 const backBtn = document.getElementById("btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backBtn.style.display = "block";
    } else {
      backBtn.style.display = "none";
    }
  });

  backBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });