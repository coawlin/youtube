import { styled } from "styled-components";
import Card from "../components/Card";
import youtubeApi from "../api/youtube";
import { useEffect, useState } from "react";
import { SearchListResponse } from "../model/youtube/search";
import { VideoListResponse } from "../model/youtube/video";
import { ChannelListResponse } from "../model/youtube/channel";
import { Thumbnails } from "../model/youtube/thumbnail";

export type Video = {
  id: string;
  thumbnail: Thumbnails;
  title: string;
  channelTitle: string;
  publishedAt: string;
  views: string;
  channelImg: Thumbnails;
  duration: string;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  max-height: calc(100vh - 60px);

  &::-webkit-scrollbar {
    background: ${(props) => props.theme.bg};
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.textSoft};
    border-radius: 15px;
  }
`;

function Home() {
  const [videos, setVideos] = useState<Video[]>([]);

  const searchVideos = async () => {
    const {
      data: { items: searchItems },
    } = await youtubeApi.get<SearchListResponse>("/search", {
      params: {
        eventType: "none",
        maxResults: 5,
        type: "video",
        videoDuration: "medium",
      },
    });

    const videoResponses = await Promise.all(
      searchItems.map((item) => {
        return youtubeApi.get<VideoListResponse>("/videos", {
          params: {
            id: item.id.videoId,
            part: ["statistics", "contentDetails"],
          },
          paramsSerializer: {
            indexes: null,
          },
        });
      })
    );

    const channelResponses = await Promise.all(
      searchItems.map((item) => {
        return youtubeApi.get<ChannelListResponse>("/channels", {
          params: {
            id: item.snippet.channelId,
          },
        });
      })
    );

    const videos = searchItems.map((item, index) => {
      const views = videoResponses[index].data.items[0].statistics.viewCount;
      const duration =
        videoResponses[index].data.items[0].contentDetails.duration;
      videoResponses[index].data.items[0].contentDetails.duration;
      const channelImg =
        channelResponses[index].data.items[0].snippet.thumbnails;
      return {
        id: item.id.videoId,
        thumbnail: item.snippet.thumbnails,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
        views,
        channelImg,
        duration,
      };
    });

    setVideos(videos);
  };
  useEffect(() => {
    searchVideos();
  }, []);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video.id} {...video} />
      ))}
    </Container>
  );
}

export default Home;
