import { Link } from 'react-router-dom';
import { abbreviateNumber } from "js-abbreviation-number";
import { searchResultsProps } from '../context/contextApi';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import VideoLength from '../shared/videoLength';

const VideoCard = ({ video }: searchResultsProps) => {
    return (
        <Link to={`/video/${video?.videoId}`}>
            <div className="flex flex-col mb-8">
                <div className='relative h-48 md:h-40 md:rounded-lg overflow-hidden'>
                    <img className='h-full rounded-lg' src={video?.thumbnails?.[0]?.url} alt={video.title} />
                    {video.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds} />
                    )}
                </div>
                <div className='flex mt-3'>
                    <div className="flex items-start">
                        <div className="flex h-9 w-9 rounded-full">
                            <img className='h-full w-full object-cover rounded-full' src={video?.author?.avatar[0].url} alt={video.author.title} />
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 overflow-hidden">
                        <span className="text-base font-medium line-clamp-2">
                            {video.title}
                        </span>
                        <span className="text-sm font-normal mt-1 text-[#606060] flex items-center">
                            {video?.author?.title}

                            {video?.author?.badges && video?.author?.badges.length > 0 && (
                                (
                                    <>
                                        <BsFillCheckCircleFill className='text-[12px] ml-1' />
                                    </>
                                )
                            )}
                        </span>
                        <div className='flex text-sm font-normal text-[#606060] truncate overflow-hidden'>
                            <span>
                                {`${abbreviateNumber(video?.stats?.views)} views`}
                            </span>
                            <span className='flex text-[24px] leading-none font-bold text-[#606060] relative top-[-8px] mx-1'>.</span>
                            <span className='truncate'>{video?.publishedTimeText}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard;