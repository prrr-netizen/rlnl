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

// jQuery 버전 토글 (Bulma 호환용)
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

// 간단한 회원가입 폼 처리 (프론트 검증용, 실제 API 연동은 별도)
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("cp-year");
  if (yearEl) {
    yearEl.innerHTML = new Date().getFullYear();
  }

  const form = document.getElementById("signup-form");
  const email = document.getElementById("signup-email");
  const pw1 = document.getElementById("signup-password");
  const pw2 = document.getElementById("signup-password2");
  const msg = document.getElementById("signup-message");

  if (form && email && pw1 && pw2 && msg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msg.textContent = "";
      msg.style.color = "#fecaca";

      if (!email.value.includes("@")) {
        msg.textContent = "올바른 이메일 주소를 입력해 주세요.";
        return;
      }
      if (pw1.value.length < 8) {
        msg.textContent = "비밀번호는 8자 이상이어야 합니다.";
        return;
      }
      if (pw1.value !== pw2.value) {
        msg.textContent = "비밀번호가 서로 일치하지 않습니다.";
        return;
      }

      // TODO: 여기서 실제 회원가입 API 연동
      msg.style.color = "#bbf7d0";
      msg.textContent = "회원가입 요청이 전송되었습니다. 이메일을 확인해 주세요.";
      form.reset();
    });
  }
});
