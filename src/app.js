import express from "express";
import { Logger } from './utils/Logger.js';
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  Logger.info(`${req.method} ${req.url}`);
  next()
})

app.get("/health", (req, res) => {
  res.send("ok");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  Logger.info(`Server is running on http://localhost:${port}`);
});