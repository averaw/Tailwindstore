import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useRef } from "react";
import AllProduct from "./AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(0, 3);
  const homeProductCartListDress = productData
    .filter((el) => el.category === "dress", [])
    .slice(0, 12);
  const loadingArray = new Array(3).fill().map((_, index) => ({ _id: index }));
  const loadingArrayFeature = new Array(3)
    .fill()
    .map((_, index) => ({ _id: index }));
  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className=" p-2 md:p-2">
      <div className="md:flex gap-4 py-3 ">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-400 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl py-3 font-bold">
            {" "}
            The fasted delivery in{" "}
            <span className="text-red-500">Your Home </span>
          </h2>
          <p className="py-3 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            {" "}
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el) => {
                return <HomeCard key={el._id} loading={"loading..."} />;
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">Dress</h2>
          <div className="flex ml-auto gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex p-2 gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListDress[0]
            ? homeProductCartListDress.map((el) => {
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
              ))}{" "}
        </div>
      </div>
      <AllProduct heading={"  You Product "} />
    </div>
  );
};

export default Home;
