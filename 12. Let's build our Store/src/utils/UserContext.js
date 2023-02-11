import { createContext } from "react";

// create context takes in some data that you need all across in your application.
const UserContext = createContext({
  user: {
    name: "Dummy name",
    email: "dummy@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
