import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const { name, category, image, price } = data;
    if (name && category && image && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const fetchRes = await fetchData.json();
      console.log(fetchRes);
      toast(fetchRes.message);
      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast(" enter req file");
    }
  };
  return (
    <div className="p-10 flex">
      <form
        className=" m-auto w-full max-w-md  shadow flex flex-col p-3  bg-slate-100 form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="m-1 text-sm">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category" className="m-1 text-sm">
          Category:
        </label>

        <select
          id="category"
          className=" bg-slate-200 text-sm h-8 max-width-100%;
          "
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>select category</option>
          <option value={"dress"}>Dress</option>
          <option value={"suit"}>Suit</option>
          <option value={"sport suit"}>Sport suit</option>
        </select>
        <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img className="h-full" src={data.image ? data.image : ""} />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>
        <label htmlFor="price" className="m-1 text-sm">
          Price:
        </label>
        <input
          type="text"
          id="price"
          className=" bg-slate-200 p-1 m-1"
          onChange={handleOnChange}
          name="price"
          value={data.price}
        />
        <label htmlFor="description" className="text-sm m-1">
          Description:
        </label>
        <textarea
          rows={2}
          className="bg-slate-200 p-1 m-1 resize-none text-sm "
          id="description"
          onChange={handleOnChange}
          name="description"
          value={data.description}
        ></textarea>
        <button className="bg-slate-300 hover:bg-slate-400 text-green-700 text-lg font-medium m-1 drop-shadow">
          Save
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
