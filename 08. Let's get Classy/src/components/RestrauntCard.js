import { IMG_CDN_URL } from "../constants";

const RestruntCard = ({ name, cuisines, cloudinaryImageId, deliveryTime }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="card image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <p>{deliveryTime} minutes</p>
    </div>
  );
};

export default RestruntCard;
