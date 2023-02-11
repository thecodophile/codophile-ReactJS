import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h4>Footer</h4>
      <h5>
        this site is developed by {user.name}, {user.email}
      </h5>
    </>
  );
};
export default Footer;
