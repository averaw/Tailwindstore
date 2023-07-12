import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    category:String,
    image: String,
    price: String,
    description: String,
  });
  
  const product = mongoose.model("product",productSchema );

  export default product;