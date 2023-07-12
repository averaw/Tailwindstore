import { BsFillHeartFill } from "react-icons/bs";
import PropTypes from "prop-types";

const FilterProduct = ({ category, onClick }) => {
  const handleClick = () => {
    const categoryName =
      typeof category === "string" ? category.toLowerCase() : String(category);
    onClick(categoryName);
  };

  return (
    <div>
      <div onClick={handleClick}>
        <div className="flex items-center justify-center text-3xl py-5 bg-yellow-500 rounded-full cursor-pointer w-20">
          <BsFillHeartFill />
        </div>
        <p className="text-center font-medium my-1 capitalize">{category}</p>
      </div>{" "}
    </div>
  );
};

FilterProduct.propTypes = {
  category: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

export default FilterProduct;
