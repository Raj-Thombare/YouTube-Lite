import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { SearchResultsProps } from "../utils/types";

import VideoLength from "../shared/videoLength";


const SuggestionVideoCard = ({ video }: SearchResultsProps) => {
    return (
        <Link to={`/video/${video?.videoId}`}>
            <div className="flex mb-3">
                <div className='relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl overflow-hidden'>
                    <img className='h-full w-full' src={video?.thumbnails?.[0]?.url} alt={video.title} />
                    {video.lengthSeconds && (
                        <VideoLength className="text-xs" time={video?.lengthSeconds} />
                    )}
                </div>
                <div className="flex flex-col ml-3 overflow-hidden">
                    <span className="text-base lg:text-sm xl:text-sm font-bold line-clamp-2">
                        {video.title}
                    </span>
                    <span className="text-sm lg:text-[10px] xl:text-[12px] mt-1 text-[#606060] flex items-center">
                        {video?.author?.title}

                        {video?.author?.badges && video?.author?.badges.length > 0 && (
                            (
                                <>
                                    <BsFillCheckCircleFill className='text-[10px] ml-1 lg:text-[10px] xl:text-[10px]' />
                                </>
                            )
                        )}
                    </span>
                    <div className='flex text-xs font-normal text-[#606060] truncate overflow-hidden'>
                        <span>
                            {`${abbreviateNumber(video?.stats?.views)} views`}
                        </span>
                        <span className='flex text-[24px] leading-none font-bold text-[#606060] relative top-[-8px] mx-1'>.</span>
                        <span className='truncate'>{video?.publishedTimeText}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SuggestionVideoCard;