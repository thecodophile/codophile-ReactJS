import { IMG_CDN_URL } from "../constants";

const RestruntCard = ({ name, cuisines, cloudinaryImageId, deliveryTime }) => {
  return (
    <div className="w-[224] p-2 m-2 shadow-lg bg-slate-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="card image" />
      <h2 className="text-xl font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <p>{deliveryTime} minutes</p>
    </div>
  );
};

export default RestruntCard;
