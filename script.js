document.addEventListener("DOMContentLoaded", () => {
  function scrollPress(direction) {
    const container = document.getElementById("pressContainer");
    const scrollAmount = 350;

    if (!container) {
      console.error("❌ pressContainer not found!");
      return;
    }

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }

  const leftBtn = document.querySelector(".press-btn.left");
  const rightBtn = document.querySelector(".press-btn.right");

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => scrollPress(-1));
    rightBtn.addEventListener("click", () => scrollPress(1));
  } else {
    console.error("❌ Press buttons not found!");
  }
});
