import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { useApiData } from "../context/contextApi";

import { VideoData } from "../utils/types";
import SuggestionVideoCard from "./SuggestionVideoCard";

import { SearchResultsProps } from "../utils/types";

const VideoDetails = () => {
  const [video, setVideo] = useState<VideoData>();
  const [relatedVideos, setRelatedVideos] = useState<SearchResultsProps[]>([]);
  const { id } = useParams();
  const { setLoading } = useApiData();

  useEffect(() => {
    document.getElementById("root")?.classList.add("custom-h");

    const fetchVideoDetails = () => {
      setLoading(true);
      fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
        setVideo(res)
        setLoading(false);
      });
    };

    const fetchRelatedVideosData = () => {
      setLoading(true);
      fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
        console.log(res.contents);
        setRelatedVideos(res.contents);
        setLoading(false);
      });
    };

    fetchVideoDetails();
    fetchRelatedVideosData();
  }, [id]);

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)]">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
          <div className="text-[#0F0F0F] font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-x-hidden">
                  <img className="h-full w-full object-cover" src={video?.author?.avatar[0].url} alt="" />
                </div>
              </div>

              <div className="flex flex-col ml-3">
                <div className="text-base font-semibold flex items-center">
                  {video?.author?.title}

                  {video?.author?.badges && video?.author?.badges.length > 0 && (
                    (
                      <>
                        <BsFillCheckCircleFill className='text-[12px] ml-1 text-[#606060]' />
                      </>
                    )
                  )}
                </div>
                <div className="text-[#606060] text-xs">
                  {video?.author.stats.subscribersText}
                </div>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              <div className="flex items-center bg-[#606060]/[0.1] justify-center h-11 px-6 rounded-3xl">
                <AiOutlineLike className="text-xl mr-2" />
                <span className="text-sm">
                  {video?.stats?.likes !== undefined
                    ? `${abbreviateNumber(video.stats.likes)} Likes`
                    : "Loading..."}
                </span>
              </div>
              <div className="flex items-center bg-[#606060]/[0.1] justify-center h-11 px-6 rounded-3xl ml-4">
                <GrView className="text-xl mr-2" />
                <span className="text-sm">
                  {video?.stats?.views !== undefined
                    ? `${abbreviateNumber(video.stats.views)} Views`
                    : "Loading..."}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.map((item: SearchResultsProps, index: number) => {
            if (item?.type !== "video") return false;
            return (
              <SuggestionVideoCard
                key={index}
                video={item?.video}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
