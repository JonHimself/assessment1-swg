import express from "express";
import routes from "./routes/routes.js";

const app = express();
app.use(express.json());

const PORT = 5050;

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT} 🤖`);
});
