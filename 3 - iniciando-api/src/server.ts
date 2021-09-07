import express from "express";

const app = express();

app.get("", (request, response) => {
  return response.send("tyeste");
});

app.listen(3333, () => console.log("🚀 Server Started 🚀"));
