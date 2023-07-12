import Product from "../model/ProductSchema.js";

export const postProduct = async (request, response) => {
  console.log(request.body);
  const data = Product(request.body);
  const datasev = await data.save();
  response.send({ message: "Upload successfully" });
};

export const getProduct = async (request, response) => {

  const data = await Product.find({})
  response.send(JSON.stringify(data))
  
};
