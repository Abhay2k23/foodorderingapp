import { ItemList } from "./ItemList";
import React from "react";
// import { useState } from "react";

export const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  showIndex,
  index,
}) => {
  // console.log(data);
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex((prevShowIndex) => (prevShowIndex === index ? null : index));
  };
  return (
    <div>
      <div className="w-6/12 m-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards.length})
          </span>
          <span>▿</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
