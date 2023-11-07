export type VideoData = {
  author: {
    avatar: {
      height: number;
      url: string;
      width: number;
    }[];
    badges: any[];
    canonicalBaseUrl: string;
    channelId: string;
    stats: {
      subscribers: number;
      subscribersText: string;
    };
    title: string;
  };
  captions: any[];
  cards: any[];
  category: string;
  chapters: any[];
  description: string;
  endScreen: {
    items: {
      playlist?: {
        playlistId: string;
        stats: {
          videos: number;
        };
        thumbnails: {
          height: number;
          url: string;
          width: number;
        }[];
        title: string;
      };
      channel?: {
        avatar: {
          height: number;
          url: string;
          width: number;
        }[];
        channelId: string;
        description: string;
        title: string;
      };
      video?: {
        lengthSeconds: number;
        stats: {
          views: number;
        };
        thumbnails: {
          height: number;
          url: string;
          width: number;
        }[];
        title: string;
        videoId: string;
      };
      type: string;
    }[];
  };
  isLiveContent: boolean;
  isLiveNow: boolean;
  keywords: string[];
  lengthSeconds: number;
  musics: any[];
  publishedDate: string;
  stats: {
    comments: number;
    likes: number;
    views: number;
  };
  superTitle: {
    items: string[];
  };
  thumbnails: {
    height: number;
    url: string;
    width: number;
  }[];
  title: string;
  videoId: string;
};

//contextApi.tsx

type AvatarProps = {
  height: number;
  url: string;
  width: number;
};

type ThumbnailsProps = {
  height: number;
  url: string;
  width: number;
};

type MovingThumbnailsProps = {
  height: number;
  url: string;
  width: number;
};

export type VideoProps = {
  videoId: string;
  author: {
    avatar: AvatarProps[];
    badges?: [];
    canonicalBaseUrl: string;
    channelId: string;
    title: string;
  };
  descriptionSnippet: string;
  isLiveNow: boolean;
  lengthSeconds: number;
  publishedTimeText: string;
  title: string;
  badges?: [];
  stats: {
    views: number;
  };
  thumbnails: ThumbnailsProps[];
  movingThumbnails: MovingThumbnailsProps[];
};

export type SearchResultsProps = {
  type?: string;
  video: VideoProps;
};

// SuggestionVideo.tsx

type Badge = {
  text: string;
  type: string;
};

type Author = {
  avatar: AvatarProps[];
  badges: Badge[];
  title: string;
};

type Stats = {
  views: number;
};

export type SuggestionVideoProps = {
  author: Author;
  isLiveNow: boolean;
  lengthSeconds: number;
  publishedTimeText: string;
  stats: Stats;
  thumbnails: ThumbnailsProps[];
  title: string;
  videoId: string;
};
