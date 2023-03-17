const products = require("../models/Product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const addProduct = new products(req.body.title);
  addProduct.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([row, fieldData]) => {
      res.render("shop/product-list", {
        prods: row,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};
