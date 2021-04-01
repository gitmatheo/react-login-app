const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3333;

const loginResponse = {
  token: "9157bc44-2230-4831-a2b4-646ba039c03b",
}

const userResponse = {
  username: "admin",
  firstName: "John",
  lastName: "Doe",
};

app.post("/login", (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).send("Wrong data");
    }
    req.body.username === "admin" && req.body.password === "password"
      ? res.status(200).json(loginResponse)
      : res.status(401).json("Wrong credentials");
  } catch (err) {
    console.log(err);
  }
});

app.get("/user", (req, res) => {
  try {
    if(req.headers.authorization !== loginResponse.token) {
      res.status(401).json("Wrong auth token");
    }

    return res.status(200).json(userResponse);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Mock api listening at http://localhost:${port}`);
});
