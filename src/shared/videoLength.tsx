import moment from 'moment';

type Props = {
  time: number,
  className: string
}

const VideoLength = ({ time, className }: Props) => {

  const videoLengthInSeconds = moment().startOf('day').seconds(time).format("mm:ss");
  return <div className={`absolute bottom-2 right-2 bg-black text-white py-1 px-2 rounded-md ${className}`}>{videoLengthInSeconds}</div>;
};

export default VideoLength;
