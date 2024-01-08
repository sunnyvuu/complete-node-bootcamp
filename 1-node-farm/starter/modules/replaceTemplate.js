module.exports = (temp, product) => {
  let output = temp.replace(/{%Product Name%}/g, product.productName);
  output = output.replace(/{%Image%}/g, product.image);
  output = output.replace(/{%Price%}/g, product.price);
  output = output.replace(/{%Nutrients%}/g, product.nutrients);
  output = output.replace(/{%Quantity%}/g, product.quantity);
  output = output.replace(/{%Description%}/g, product.description);
  output = output.replace(/{%From%}/g, product.from);
  output = output.replace(/{%id%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%not_organic%}/g, "not-organic");
  return output;
};
