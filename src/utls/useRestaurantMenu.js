import { useEffect, useState } from "react";
import { MENU_API, MENU_API_2 } from "../utls/constants";

const useRestaurantMenu = (resId) => {
  // fetch data then return resInfo
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId + MENU_API_2);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
