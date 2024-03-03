import RestaurantCard, { withPromoted } from "./RestaurantCard";
// import resList from "../utls/mockData";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utls/useOnlineStatus";
import { UserContext } from "../utls/UserContext";

const Body = () => {
  const [listOfRes, setListOfRes] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(listOfRes);

  const Promoted = withPromoted(RestaurantCard);
  // console.log("re render");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6906802&lng=86.9768363&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltered(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // onlineStatus
  const status = useOnlineStatus();
  if (status === false) return <h1>Look's like you are offline</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);
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
      <div className="flex ">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="px-4 py-2 m-4 flex items-center">
          <button
            className="px-4 py-3 bg-gray-100 rounded-lg"
            onClick={() => {
              let filteredList = listOfRes.filter((res) =>
                // console.log(res.info.avgRating >= 4);
                console.log(res.info.avgRating >= 4.0)
              );
              setListOfRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="px-4 py-2 m-4 flex items-center">
          <label>User Name :</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filtered.map((restaurant) => {
          console.log(restaurant?.info?.id);
          return (
            <Link
              to={"/restaurants/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                <Promoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
