const products = require("../models/Product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", { docTitle: "Add Product", path: "/admin/add-product" });
};

exports.postAddProduct = (req, res, next) => {
  const addProduct = new products(req.body.title);
  addProduct.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  products.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "Shop",
      path: "/",
    });
  });
};
