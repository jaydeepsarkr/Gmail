const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "717334353604-s98t8kmflkcpr1o9cchsfbeko8sskb03.apps.googleusercontent.com"
);

app.use(bodyParser.json());
app.use(cors());

app.post("/api/google-login", async (req, res) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: req.body.token,
      audience:
        "717334353604-s98t8kmflkcpr1o9cchsfbeko8sskb03.apps.googleusercontent.com", // ✅ Required
    });

    const payload = ticket.getPayload(); // ✅ Contains user info
    res.status(200).json(payload);
  } catch (error) {
    console.error("Google login error:", error);
    res.status(401).json({ error: "Invalid ID token" });
  }
});

app.listen(4001, () => {
  console.log(`✅ Server is running at http://localhost:4001`);
});
