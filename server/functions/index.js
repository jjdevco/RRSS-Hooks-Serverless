const functions = require("firebase-functions");
const app = require("express")();

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization, Accept"
  );
  next();
});

app.get("/hello-world", (req, res) => {
  res.status(201).json({ user: "Test value" });
});

exports.api = functions.https.onRequest(app);
