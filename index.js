import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from server",
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
