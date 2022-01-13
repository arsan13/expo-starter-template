import React, { useState, useEffect, useContext } from "react";
import { getData, storeData, removeData } from "../utils/LocalStorage";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export const getUser = () => useContext(UserContext);
export const updateUser = () => useContext(UserUpdateContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleUser = (value) => {
    if (value === null) removeData();
    else storeData(value);
    setUser(value);
  };

  useEffect(() => {
    getData().then((val) => setUser(val));
  }, []);

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={handleUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;
