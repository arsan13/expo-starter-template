import React, { useState, useContext } from "react";

const LoadingContext = React.createContext();
const UpdateLoadingContext = React.createContext();

export const getLoading = () => useContext(LoadingContext);
export const handleLoading = () => useContext(UpdateLoadingContext);

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (value) => {
    setIsLoading(value);
  };

  return (
    <LoadingContext.Provider value={isLoading}>
      <UpdateLoadingContext.Provider value={handleLoading}>
        {children}
      </UpdateLoadingContext.Provider>
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
