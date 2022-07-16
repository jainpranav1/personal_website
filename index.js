const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about_me", (req, res) => {
  res.render("about_me");
});

app.get("/academics", (req, res) => {
  res.render("academics");
});

app.get("/work_experience", (req, res) => {
  res.render("work_experience");
});

app.get("/leadership", (req, res) => {
  res.render("leadership");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/achievements", (req, res) => {
  res.render("achievements");
});

app.get("/volunteering", (req, res) => {
  res.render("volunteering");
});

app.listen(5000);
