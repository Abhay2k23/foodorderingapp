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
    deliveryTime,
  } = resData?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwoString}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

export default RestaurantCard;
