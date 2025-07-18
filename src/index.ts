document.addEventListener("DOMContentLoaded", function () {
  //   here we are telling ts to confirm if not null && if button element.

  const startButton = document.getElementById("startButton");
  if (startButton instanceof HTMLButtonElement) {
    startButton.addEventListener("click", () => {
      window.location.href = "/pages/class.html";
    });
  }
});
