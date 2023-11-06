import React, { useState, useEffect, useContext, createContext } from "react";
import { fetchDataFromApi } from "../utils/api";

type Props = {
  children: React.ReactNode,
};

type avatarProps = {
  height: number,
  url: string,
  width: number
}

type thumbnailsProps = {
  height: number,
  url: string,
  width: number
}

type movingThumbnailsProps = {
  height: number,
  url: string,
  width: number
}

export type videoProps = {
  videoId: string,
  author: {
    avatar: avatarProps[],
    badges?: [],
    canonicalBaseUrl: string,
    channelId: string,
    title: string
  },
  descriptionSnippet: string,
  isLiveNow: boolean,
  lengthSeconds: number,
  publishedTimeText: string,
  title: string,
  badges?: [],
  stats: {
    views: number
  },
  thumbnails: thumbnailsProps[],
  movingThumbnails: movingThumbnailsProps[]
}

export type searchResultsProps = {
  type?: string,
  video: videoProps
}

const defaultState = {
  loading: false,
  setLoading: (value: boolean) => { },
  openSidebar: true,
  setOpenSidebar: (value: boolean) => { },
  searchResults: [] as searchResultsProps[],
  setSearchResults: (value: []) => { },
  selectedCategory: "New",
  setSelectedCategory: (value: string) => { },
};

const DataContext = createContext(defaultState);

export const DataContextProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const [searchResults, setSearchResults] = useState<searchResultsProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Home");

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, []);

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
