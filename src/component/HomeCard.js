import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeCard = ({ image, name, category, loading, id }) => {
  return (
    <div className="bg-white shadow-md p-2 min-w-[150px]">
      {name ? (
        <>
        <Link
            to={`/store/${id}`}
            onClick={() => {
              window.scrollTo({ top: "0", behavior: "smooth" });
            }}
          >
          {" "}
          <div className="w-40 min-h-[150px]">
            <img src={image} key={image} className="h-full w-full" />
          </div>
          <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
            {name}
          </h3>
          <p className="text-center text-slate-500  font-medium">{category}</p>
          <p className="text-center font-bold">
            {" "}
          </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

HomeCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  loading: PropTypes.string,
  id: PropTypes.string,
};

export default HomeCard;
