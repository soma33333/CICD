const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/user", (req, res) => {
  res.json({ id: 1, name: "Soma" });
});

module.exports = app;

if (require.main === module) {
  app.listen(5000, () => console.log("Server running on port 5000"));
}
