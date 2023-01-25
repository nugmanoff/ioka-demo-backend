const express = require("express");
const app = express();

const PORT = 1337;

app.use(express.json());

app.get("/api/payment", async (req, res) => {
  console.log(req.query);
  if (req.query.wait) {
    await new Promise((r) => setTimeout(r, req.query.wait * 1000));
  }
  if (req.query.result === "success") {
    res.status(200);
    res.json({ status: "ok" });
  } else {
    res.status(500);
    res.json({ status: "error" });
  }
});
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
