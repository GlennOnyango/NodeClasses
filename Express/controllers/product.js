const products = require("../models/Product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { docTitle: "Add Product", path: "admin" });
};

exports.postAddProduct = (req, res, next) => {
  const addProduct = new products(req.body.title);
  addProduct.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  products.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      docTitle: "Shop",
      path: "shop",
    });
  });
};
