import { Link } from "react-router-dom"
import { VideoProps } from "../utils/types"
import VideoLength from "../shared/videoLength"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { abbreviateNumber } from "js-abbreviation-number"

type Props = {
    video: VideoProps
}

const SearchResultVideoCard = ({ video }: Props) => {
    return (
        <Link to={`/video/${video?.videoId}`} className="block m-auto md:m-0">
            <div className="flex flex-col md:w-full md:flex-row mb-8 md:mb-1 rounded-xl md:px-4 py-2">
                <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl overflow-hidden">
                    <img className='h-full w-full' src={video?.thumbnails?.[0]?.url} alt={video.title} />
                    {video.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds} className='text-sm' />
                    )}
                </div>
                <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
                    <span className="text-lg md:text-lg font-medium line-clamp-2">
                        {video?.title}
                    </span>
                    <div className="flex text-sm mt-[2px] text-[#606060] truncate overflow-hidden">
                        <span>
                            {`${abbreviateNumber(video?.stats?.views)} views`}
                        </span>
                        <span className='flex text-[24px] leading-none font-bold text-[#606060] relative top-[-8px] mx-1'>.</span>
                        <span className='truncate'>{video?.publishedTimeText}</span>
                    </div>
                    <div className="hidden my-2 md:flex items-center">
                        <div className="flex items-start mr-3">
                            <div className="flex h-8 w-8 rounded-full overflow-hidden">
                                <img className="h-full w-full object-cover" src={video?.author?.avatar[0].url} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-[#606060] flex items-center">
                                {video?.author?.title}
                                {video?.author?.badges && video?.author?.badges.length > 0 && (
                                    (
                                        <>
                                            <BsFillCheckCircleFill className='text-[12px] ml-2 text-[#606060]' />
                                        </>
                                    )
                                )}
                            </span>
                        </div>
                    </div>
                    <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-[#606060] md:pr-24 md:my-2">
                        {video?.descriptionSnippet}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default SearchResultVideoCard