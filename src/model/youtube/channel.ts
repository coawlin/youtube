import { Thumbnails } from "./thumbnail";

export type ChannelSnippet = {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  defaultLanguage: string;
  localized: {
    title: string;
    description: string;
  };
  country: string;
};

export type ChannelListResponse = {
  kind: "youtube#channelListResponse";
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: {
    snippet: ChannelSnippet;
  }[];
};
