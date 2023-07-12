import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import FilterProduct from "../component/FilterProduct";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];
  // filter data display
  const [, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    setFilterBy(category);
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };
  const loadingArrayFeature = new Array(3)
  .fill()
  .map((_, index) => ({ _id: index }));
  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4 overflow-scroll scrollbar-none">
        {heading}
      </h2>

      <div className="flex gap-4 justify-center">
        {categoryList[0] ? (
          categoryList.map((category, index) => {
            return (
              <FilterProduct
                category={category}
                key={index}
                onClick={(el) => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading ...</p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0]
          ? dataFilter.map((el) => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              );
            })
          : loadingArrayFeature.map((el) => (
              <CardFeature key={el._id} loading="Loading..." />
            ))}
      </div>
    </div>
  );
};

AllProduct.propTypes = {
  heading: PropTypes.string,
};

export default AllProduct;
