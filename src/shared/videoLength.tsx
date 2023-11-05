import moment from 'moment';

type Props = {
  time: number
}

const VideoLength = ({ time }: Props) => {

  const videoLengthInSeconds = moment().startOf('day').seconds(time).format("mm:ss");
  return <div className='absolute bottom-2 right-2 bg-black text-white py-1 px-2 text-sm rounded-md'>{videoLengthInSeconds}</div>;
};

export default VideoLength;
