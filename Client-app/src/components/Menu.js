import React, { useState, useEffect } from "react";
import Foodcard from "./Foodcard";


const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredMenuData, setFilteredMenuData] = useState([]);
  

  const loadData = async () => {
    // Fetching menu data from backend
    let response = await fetch("http://localhost:5001/api/menudata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();
    setMenuData(response);
    setFilteredMenuData(response); // Initially set filtered data same as menu data
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    filterMenuData(e.target.value);
  };

  // Filter menu data based on search input
  const filterMenuData = (input) => {  //Initially filtered menu data is set to original data. When something is written in search bar this function is automatically called(is being called as the search input is changing looK in A) and look in A the search input also comes to this function's input.
    const filteredData = menuData.filter((item) =>   
      item.name.toLowerCase().includes(input.toLowerCase())   //why not ===? because we are not looking for the exact name but one word could be so we are using .includes()
    );
    setFilteredMenuData(filteredData);
  };

 
  return (
    <div>
      <div className="w-full mx-auto px-6 py-20 sm:px-20 h-full flex flex-col justify-center items-center bg-gray-900">
        <h1 className="font-bold text-3xl sm:text-5xl text-white mb-4">
          Checkout Our Menu
        </h1>
        <div className="mb-3 xl:w-96">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              value={searchInput}
              onChange={handleSearchInputChange}
              className="relative m-0 block text-white flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-white dark:placeholder:text-white dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal  text-white"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full text-gray-300 bg-gray-900">
        <div className="max-w-[1000px] mx-auto p-4 flex  flex-col justify-center items-center w-full h-full">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredMenuData.length === 0 ? (
              <h2 className="text-white text-2xl">Item not found</h2>
            ) : (
              filteredMenuData.map((item) => (
                <div key={item._id}>
                  <Foodcard
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
