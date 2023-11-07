import React, { useState, useEffect, useContext, createContext } from "react";
import { fetchDataFromApi } from "../utils/api";
import { SearchResultsProps } from "../utils/types";

type Props = {
  children: React.ReactNode,
};

const defaultState = {
  loading: false,
  setLoading: (value: boolean) => { },
  openSidebar: true,
  setOpenSidebar: (value: boolean) => { },
  searchResults: [] as SearchResultsProps[],
  setSearchResults: (value: []) => { },
  selectedCategory: "New",
  setSelectedCategory: (value: string) => { },
};

const DataContext = createContext(defaultState);

export const DataContextProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const [searchResults, setSearchResults] = useState<SearchResultsProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Home");

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query: String) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      setSearchResults(contents)
      setLoading(false);
    });
  };

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
        openSidebar,
        setOpenSidebar
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useApiData = () => useContext(DataContext);
