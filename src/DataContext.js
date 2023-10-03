import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export function DataProvider(props) {

  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setData(Math.random());
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    data,
    loading,
    fetchData
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  )
}