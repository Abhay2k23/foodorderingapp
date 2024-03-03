import { CDN_URL } from "../utls/constants";
import Body from "./Body";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwoString,
    sla,
    areaName,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-[#f0f0f0]">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-lg"
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4 className="break-all">{cuisines.join(", ")} </h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwoString}</h4>
      <h4>{areaName}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

// Higher order function
export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
