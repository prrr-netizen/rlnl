const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// index.html, style.css, script.js, bulma.min.css, 이미지 등을 그대로 서빙
app.use(express.static(__dirname));

const licenses = [
  {
    guildId: "여기에_테스트_길드ID_하나_적기",
    plan: "full",
    expiresAt: "2026-04-01T00:00:00.000Z"
  }
];

const API_KEY = process.env.LICENSE_API_KEY || "rlnl_L1c3ns3_K3y_9x7q";

app.post("/licenses/check", (req, res) => {
  const auth = req.headers.authorization || "";
  if (auth !== `Bearer ${API_KEY}`) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const { guild_id } = req.body;
  if (!guild_id) {
    return res.status(400).json({ error: "guild_id required" });
  }

  const license = licenses.find((l) => l.guildId === guild_id);

  if (!license) {
    return res.json({
      valid: false,
      plan: "none",
      expires_at: null
    });
  }

  return res.json({
    valid: true,
    plan: license.plan,
    expires_at: license.expiresAt
  });
});

// 메인 페이지: 카지노 스타일 rlnl 패널
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
