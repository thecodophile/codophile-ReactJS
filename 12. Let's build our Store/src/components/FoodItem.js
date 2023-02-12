import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-[224] p-2 m-2 shadow-lg bg-slate-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="card image" />
      <h2 className="text-xl font-bold">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
