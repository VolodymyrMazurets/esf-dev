const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");

btn1.addEventListener("click", () => {
  window.open("https://m.me/ESFhurghada2020?ref=w8912279", "_blank");
});
btn2.addEventListener("click", () => {
  window.open("https://m.me/ESFhurghada2020?ref=w8912293", "_blank");
});
btn3.addEventListener("click", () => {
  window.open("https://m.me/ESFhurghada2020?ref=w8912294", "_blank");
});
btn4.addEventListener("click", () => {
  window.open("https://m.me/ESFhurghada2020?ref=w8912301", "_blank");
});
btn5.addEventListener("click", () => {
  window.open("https://m.me/ESFhurghada2020?ref=w8912307", "_blank");
});
btn6.addEventListener("click", () => {
  window.open("https://m.me/ESFhurghada2020?ref=w8912312", "_blank");
});
btn7.addEventListener("click", () => {
  window.open("https://m.me/ESFhurghada2020?ref=w8921114", "_blank");
});
btn8.addEventListener("click", () => {
  window.open("https://m.me/ESFhurghada2020?ref=w8912382", "_blank");
});
btn9.addEventListener("click", () => {
  window.open("https://m.me/ESFhurghada2020?ref=w8893809", "_blank");
});

$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1100,
        "swing",
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
