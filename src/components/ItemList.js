import { CDN_URL } from "../utls/constants";

export const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <button className="p-2 bg-black text-white shadow-lg absolute mx-8 rounded-lg">
                Add +
              </button>
              <img src={CDN_URL + item?.card?.info?.imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
