const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// ⚙️ Web server giữ app “tỉnh”
app.get("/", (req, res) => {
  res.send("✅ HaxBall room is alive");
});
app.listen(PORT, () => {
  console.log(`🌐 Web server running on port ${PORT}`);
});

// 🌐 Load HaxBall Headless API từ trình duyệt
const HBInit = require("haxball-headless");

const room = HBInit({
  roomName: "Phòng HaxBall 24/7",
  maxPlayers: 12,
  public: true,
  token: "THAY_BANG_TOKEN_CUA_BAN"
});

room.onPlayerJoin = (player) => {
  room.sendChat(`👋 Xin chào ${player.name}`);
};
