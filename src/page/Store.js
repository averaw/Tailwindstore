import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProduct from "./AllProduct";
import { addCartItem } from "../redux/productSlice";

const Store = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  const handleAddCartProduct = (e) => {
    e.stopPropagation();
    dispatch(addCartItem(productDisplay));
  };
  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-4xl bg-white m-auto md:flex">
        <div className="max-w-lg  overflow-hidden md:w-1/2 w-full ">
          <img
            src={productDisplay.image}
            className="hover:scale-105 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1 py-4 px-4">
          <h3 className="font-semibold text-slate-600 capitalize text-2xl  md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-500 text-2xl font-medium">
            {productDisplay.category}
          </p>
          <div>
            <p className="text-slate-600 font-medium">Description : </p>
            <p>{productDisplay.description}</p>
          </div>{" "}
          <p className="font-bold">
            {" "}
            <span className="text-slate-600 md:text-2xl">
              {productDisplay.price} <span className="text-green-800">$</span>
            </span>
          </p>
          <div className="flex gap-3 mt-40">
            <button
              className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full min-w-[100px]"
              // onClick={}
            >
              Buy
            </button>
            <button
              className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full text-center whitespace-nowrap min-w-[100px]"
              onClick={handleAddCartProduct}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related product"} />
    </div>
  );
};

export default Store;
