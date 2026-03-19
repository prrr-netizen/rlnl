// 온라인 인원/세션 수 더미 애니메이션
(function () {
  const onlineEl = document.getElementById("online-players");
  const heroOnlineEl = document.getElementById("hero-online-count");
  const sessionEl = document.getElementById("session-count");

  if (!onlineEl || !heroOnlineEl || !sessionEl) return;

  let baseOnline = parseInt(onlineEl.textContent || "96", 10);
  let baseSession = parseInt(sessionEl.textContent || "8", 10);

  function tick() {
    const onlineDiff = Math.floor(Math.random() * 7) - 3;
    const sessionDiff = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;

    baseOnline = Math.max(0, baseOnline + onlineDiff);
    baseSession = Math.max(1, baseSession + sessionDiff);

    onlineEl.textContent = baseOnline;
    heroOnlineEl.textContent = baseOnline;
    sessionEl.textContent = baseSession;
  }

  setInterval(tick, 5000);
})();

// 충전 버튼 클릭 파동 효과
(function () {
  const chargeBtn = document.getElementById("charge-button");
  if (!chargeBtn) return;

  chargeBtn.addEventListener("click", function () {
    chargeBtn.style.transform = "scale(0.96)";
    setTimeout(() => {
      chargeBtn.style.transform = "";
    }, 120);
  });
})();
