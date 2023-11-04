import React, { useState, useEffect, useContext, createContext } from "react";
import { fetchDataFromApi } from "../utils/api";

type Props = {
  children: React.ReactNode,
};

const defaultState = {
  loading: false,
  setLoading: (value: boolean) => { },
  searchResults: false,
  setSearchResults: (value: boolean) => { },
  selectedCategory: "New",
  setSelectedCategory: (value: string) => { },
  mobileMenu: false,
  setMobileMenu: (value: boolean) => { },
};

const DataContext = createContext(defaultState);

export const DataContextProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  // useEffect(() => {
  //   fetchSelectedCategoryData(selectCategories);
  // }, [selectCategories]);

  // const fetchSelectedCategoryData = (query: String) => {
  //   setLoading(true);
  //   fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
  //     console.log(contents);
  //     setSearchResults(contents)
  //     setLoading(false);
  //   });
  // };

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useApiData = () => useContext(DataContext);
