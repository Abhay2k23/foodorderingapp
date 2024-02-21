import RestaurantCard from "./RestaurantCard";
import resList from "../utls/mockData";
import { useState, useEffect } from "react";
import { Icon } from "@iconify-icon/react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("re render");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=19.1174798&lng=72.86916029999999"
    );
    const json = await data.json();
    console.log(json);
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltered(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // conditional rendering using ternery operator
  return listOfRes.length === 0 ? (
    <>
      <Icon
        icon="eos-icons:three-dots-loading"
        width="6rem"
        height="6rem"
        style={{ color: "#64d38f" }}
      />
      <Shimmer />
    </>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the UI
              // searchText
              // console.log(searchText);
              let filtered = listOfRes.filter((res) => {
                console.log(res?.info?.name.toLowerCase());
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFiltered(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRes.filter(
              (res) =>
                // console.log(res.info.avgRating >= 4);
                res.info.avgRating >= 4.0
            );
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filtered.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
