"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToLocalStorage = addToLocalStorage;
exports.viewFromLocalStorage = viewFromLocalStorage;

function addToLocalStorage(newProduct) {
  var product = JSON.parse(localStorage.getItem("product"));

  if (!product) {
    product = [];
  }

  product.push(newProduct);
  localStorage.setItem("product", JSON.stringify(product));
}

function viewFromLocalStorage(id) {
  var product = JSON.parse(localStorage.getItem("product"));
  return product;
}