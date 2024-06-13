import React from "react";
import { useCart } from "../context/CartContext";
const Foodcard = (props) => {
  const { dispatch } = useCart();
  const addToCart = () => {
    const item = {name:props.name, description:props.description,price:props.price}
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  return (
    <div className="max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow ">
      <p>
        <img className="rounded-t-lg" src={props.image} alt="" />  {/* Give a height and ObjectFill property to image to make all images same  */}
      </p>
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.name}
          </h5>
        <p className="mb-3 font-normal text-gray-700 ">${props.price}</p>
        <p className="mb-3 font-normal text-gray-700">
          {props.description}
        </p>

        <button onClick={() => addToCart()} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-200 bg-gray-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
          Add to cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 ml-1"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Foodcard;
