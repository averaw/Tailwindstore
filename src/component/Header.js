import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { logoutRedux } from "../redux/userSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout seccessful");
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const cartItemNumber = useSelector((state) => state.product.cartItem);
  console.log(process.env.REACT_APP_ADMIN_EMAIL);
  return (
    <header>
      <div className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white ">
        <div className="flex items-center h-full justify-between">
          <Link to={""}>
            <div className="h-7">
              <div className="h-full ">PROLOOK</div>
            </div>
          </Link>
          <div className="flex items-center gap-4 md:gap-7">
            <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
              <Link to={""}>Home</Link>
              <Link to={"store/64722f8846decd8fe2267bbe"}>Store</Link>
              <Link to={"about"}>About</Link>
              <Link to={"contact"}>Contact</Link>
            </nav>
            <div className="text-2xl text-slate-600 relative">
              <Link to={"cart"}>
                <BsCartFill />
              </Link>
              <div
                className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center justifyContent-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {cartItemNumber.length}
              </div>
            </div>

            <div className=" text-slate-600" onClick={handleShowMenu}>
              <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
                {" "}
                {userData.image ? (
                  <img src={userData.image} className="h-full w-full" />
                ) : (
                  <HiOutlineUserCircle />
                )}
              </div>

              {showMenu && (
                <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                  {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                    <Link
                      to={"newproduct"}
                      className="whitespace-nowrap cursor-pointer px-2"
                    >
                      New product
                    </Link>
                  )}

                  {userData.image ? (
                    <p
                      className="cursor-pointer whitespace-nowrap"
                      onClick={handleLogout}
                    >
                      Logout {userData.firstName}
                    </p>
                  ) : (
                    <Link
                      to={"login"}
                      className="whitespace-nowrap cursor-pointer px-2"
                    >
                      Login
                    </Link>
                  )}

                  <nav className="text-base md:text-lg flex flex-col">
                    <Link className="px-2  py-1" to={""}>
                      Home
                    </Link>
                    <Link
                      className="px-2  py-1"
                      to={"store/64722f8846decd8fe2267bbe"}
                    >
                      Store
                    </Link>
                    <Link className="px-2  py-1" to={"about"}>
                      About
                    </Link>
                    <Link className="px-2  py-1" to={"contact"}>
                      Contact
                    </Link>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
