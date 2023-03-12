const products = [];

const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(p, (err, filecontent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(filecontent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(p, (err, filecontent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(filecontent));
      }
    });
  }
};
