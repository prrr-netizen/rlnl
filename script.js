<script>
  // navbar burger 토글 (DOM API)
  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".navbar-burger");
    const menu = document.querySelector("#navbarMenu");

    if (burger && menu) {
      burger.addEventListener("click", () => {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
      });
    }
  });

  // jQuery 버전 토글 (기존 템플릿 호환용)
  $(document).ready(function () {
    $(".navbar-burger").click(function () {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });
  });

  // navbar on scroll (색 전환)
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 700) {
        $("nav").addClass("nav-w");
        $(".navbar-menu").addClass("nav-w");
        $(".navbar-item").addClass("nav-dark");
        $(".navbar-link").addClass("nav-dark");
        $(".navbar-burger").removeClass("has-text-white");
        $(".navbar-burger").addClass("has-text-dark");
      } else {
        $("nav").removeClass("nav-w");
        $(".navbar-menu").removeClass("nav-w");
        $(".navbar-item").removeClass("nav-dark");
        $(".navbar-link").removeClass("nav-dark");
        $(".navbar-burger").removeClass("has-text-dark");
        $(".navbar-burger").addClass("has-text-white");
      }
    });
  });

  // back to top
  const btn = $("#backtotop");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  // copyright year
  document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("cp-year");
    if (yearEl) {
      yearEl.innerHTML = new Date().getFullYear();
    }
  });
</script>
