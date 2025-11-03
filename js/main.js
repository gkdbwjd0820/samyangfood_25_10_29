$(document).ready(function () {
  var swiper = new Swiper(".sec_1_2", {
    slidesPerView: 3.8,
    spaceBetween: 8,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".sec_1_2_food", {
    slidesPerView: 1.8,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".con_2_wrap", {
    slidesPerView: 1.6,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".sec_5", {
    slidesPerView: 3.8,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 모든 faq 영역 안의 plus, minus 아이콘 선택
  const plusIcons = document.querySelectorAll(".plus");
  const minusIcons = document.querySelectorAll(".minus");

  plusIcons.forEach((plus) => {
    plus.addEventListener("click", function (event) {
      event.preventDefault(); // ★ 링크 기본 동작 막기

      const parent = plus.parentElement;
      const minus = parent.querySelector(".minus");

      minus.style.display = "block";
      plus.style.display = "none";
    });
  });

  minusIcons.forEach((minus) => {
    minus.addEventListener("click", function (event) {
      event.preventDefault(); // ★ 링크 기본 동작 막기

      const parent = minus.parentElement;
      const plus = parent.querySelector(".plus");

      minus.style.display = "none";
      plus.style.display = "block";
    });
  });
});
