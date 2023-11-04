import React, { useEffect } from 'react';
import { useApiData } from '../context/contextApi';
import Sidebar from './Sidebar';

type Props = {}

const Feed = (props: Props) => {
    return (
        <div className='flex flex-row h-[calc(100%-56px)]'>
            <Sidebar />
        </div>
    )
}

export default Feed;