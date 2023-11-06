export interface VideoData {
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
}
