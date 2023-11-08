import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { useApiData } from "../context/contextApi";

import Sidebar from "./Sidebar";

import { SearchResultsProps } from "../utils/types";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {

  const [results, setResults] = useState<SearchResultsProps[]>([]);
  const { searchQuery } = useParams();
  const { setLoading } = useApiData();

  useEffect(() => {
    document.getElementById('root')?.classList.remove("custom-h");

    const fetchSearchResults = () => {
      setLoading(true);
      fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
        console.log(res.contents)
        setResults(res?.contents);
        setLoading(false);
      })
    }

    fetchSearchResults();
  }, [searchQuery])

  return <div className="flex flex-row h-[calc(100%-56px)]">
    <Sidebar />
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
      <div className="grid grid-cols-1 justify-center gap-2 p-5">
        {
          results?.map((item: SearchResultsProps) => {
            if (item?.type !== 'video') return false;
            let video = item?.video;
            return (
              <SearchResultVideoCard key={item?.video.videoId} video={video} />
            )
          })
        }
      </div>
    </div>
  </div>;
};

export default SearchResult;
