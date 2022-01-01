import React, { useState, useContext } from "react";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export const getUser = () => useContext(UserContext);
export const updateUser = () => useContext(UserUpdateContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleUser = (value) => {
    setUser(value);
  };

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={handleUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;
