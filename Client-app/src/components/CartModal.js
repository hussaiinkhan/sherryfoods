import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartModal = (props) => {
  const { cart, dispatch } = useCart();
 

  
  return (
    <div
      id="select-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 ">Your Cart</h3>
            <button
              type="button"
              className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center "
              onClick={props.handleClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            {cart.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Your cart is empty.
              </p>
            ) : (
              <div>
                <p className="text-gray-500  mb-4">
                  Here is the list of items in your cart!
                </p>
                <ul className="space-y-4 mb-4">
                  {cart.map((item) => (
                    <li key={item.name}>
                      <input
                        type="radio"
                        id={item.id}
                        name="cart-item"
                        value={item.name}
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor={item.id}
                        className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer hover:text-gray-300  peer-checked:text-blue-500 peer-checked:border-blue-600 "
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            {item.name}
                          </div>
                          <div className="w-full text-gray-500 ">
                            {item.description}
                          </div>
                          <div className="w-full text-gray-500 ">
                            {item.price}
                          </div>
                        </div>
                        <svg
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_ITEM",
                              payload: item.name,
                            })
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 text-red-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Link to='/checkout'>
            <button
              onClick={props.handleClose}
              disabled={cart.length === 0}
              className="text-white inline-flex w-full justify-center bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
