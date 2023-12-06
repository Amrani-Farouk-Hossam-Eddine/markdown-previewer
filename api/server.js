const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.markdownguide.org/api/v1/basic-syntax.json"
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
