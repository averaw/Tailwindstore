import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";
import { useDispatch } from "react-redux";
const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    e.stopPropagation();
    dispatch(
      addCartItem({
        _id: id,
        name,
        price,
        category,
        image
      })
    );
  };
  return (
    <div className=" flex flex-col  cursor-pointer w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 mb-1 ">
      {image ? (
        <>
          <Link
            to={`/store/${id}`}
            onClick={() => {
              window.scrollTo({ top: "0", behavior: "smooth" });
            }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-auto object-cover  object-center"
            />
            <h3 className="font-semibold text-slate-600 capitalize text-lg mt-2 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className="text-slate-500 font-medium mt-2">{category}</p>
            <p className="font-bold mt-2">
              <span className="text-slate-600">{price} </span>
              <span className="text-green-800">$</span>
            </p>{" "}
          </Link>

          <button
            className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full"
            onClick={(e) => handleAddCartProduct(e)}
          >
            Add Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

CardFeature.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  loading: PropTypes.string,
  id: PropTypes.string,
};

export default CardFeature;
