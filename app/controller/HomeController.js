const products = require("../models/Product");

class HomeController {
  homepage(req, res) {
    res.render("index", { title: "Home" });
  }

  loginpage(req, res) {
    res.render("login", { title: "Login" });
  }

  errorpage(req, res) {
    res.render("404", { title: "Error" });
  }

  blankpage(req, res) {
    res.render("blank", { title: "Blank" });
  }

  buttonspage(req, res) {
    res.render("buttons", { title: "Buttons" });
  }

  cardspage(req, res) {
    res.render("cards", { title: "Cards" });
  }

  chartspage(req, res) {
    res.render("charts", { title: "Charts" });
  }

  forgetpasswordpage(req, res) {
    res.render("forgot-password", { title: "Forgot Password" });
  }

  registerpage(req, res) {
    res.render("register", { title: "Register" });
  }

  tablespage(req, res) {
    res.render("tables", { title: "Tables" });
  }

  utilitiesborderpage(req, res) {
    res.render("utilities-border", { title: "Utilities Border" });
  }

  utilitiescolorpage(req, res) {
    res.render("utilities-color", { title: "Utilities Color" });
  }

  utilitiesanimationpage(req, res) {
    res.render("utilities-animation", { title: "Utilities Animation" });
  }

  utilitiesotherpage(req, res) {
    res.render("utilities-other", { title: "Utilities Other" });
  }

  aboutpage(req, res) {
    res.send("Hi World from about page");
  }

  contactpage(req, res) {
    res.send("Hi World from contact page");
  }

  productpage(req, res) {
    res.render("product", { products, title: "Product" });
  }
}

module.exports = new HomeController();
