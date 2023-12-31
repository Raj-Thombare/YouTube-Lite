import { useEffect } from 'react';
import { useApiData } from '../context/contextApi';
import Sidebar from './Sidebar';
import VideoCard from './VideoCard';

const Feed = () => {

    const { loading, searchResults } = useApiData();

    useEffect(() => {
        document.getElementById('root')?.classList.remove("custom-h")
    }, [])

    return (
        <div className='flex flex-row h-[calc(100%-56px)]'>
            <Sidebar />
            <div className='grow w-[calc(100%-100px)] md:w-[calc(100%-240px)] overflow-y-auto'>
                <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
                    {!loading && searchResults && searchResults?.map((item) => {
                        if (item.type !== 'video') return false;
                        return (
                            <VideoCard key={item?.video?.videoId} video={item?.video} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Feed;