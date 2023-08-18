import { Thumbnails } from "./thumbnail";

export type SearchResult = {
  kind: "youtube#searchResult";
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string; // ISO8601 string
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
  };
};

export type SearchListResponse = {
  kind: "youtube#searchListResponse";
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchResult[];
};
