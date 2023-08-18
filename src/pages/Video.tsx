import { styled } from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import Comment from "../components/Comment";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;
const Recommendations = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const ChannelImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Title = styled.div`
  margin-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;
const MainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  gap: 2px;
`;
const Text = styled.span`
  color: ${(props) => props.theme.textSoft};
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 10px;
`;
const NameAndSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChannelName = styled(Text)``;
const Subscribers = styled(Text)``;
const SubscribeButton = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.text};
  padding: 20px;
  height: 30px;
  color: ${(props) => props.theme.bg};
  border-radius: 20px;
`;
const VideoFeatures = styled.div`
  display: flex;
  gap: 10px;
`;
const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${(props) => `${props.theme.text}0d`};
  gap: 5px;
`;
const Separator = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  height: 100%;
  margin: 0 10px;
`;
const DescriptionBox = styled.div`
  padding: 10px;
  background-color: ${(props) => `${props.theme.text}0d`};
`;
const ViewsandTimeWrapper = styled.div`
  margin-bottom: 10px;
`;
const Views = styled(Text)``;
const UploadTime = styled(Text)``;
const DescriptionText = styled(Text)`
  line-height: 1.4;
`;
const CommentsSection = styled.div``;

function Video() {
  const { id } = useParams();

  return (
    <Container>
      <Wrapper>
        <iframe
          width="100%"
          height="700px"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Title>
          HIGHLIGHTS | Arsenal vs Nottingham Forest (2-1) | Premier League |
          Nketiah, Saka
        </Title>
        <MainInfo>
          <ChannelInfo>
            <ChannelImg src="https://yt3.ggpht.com/Tz6IQnS__dC36TTPmBWhRS-lpq6Gs6aQfEK68MzvK7sf8f0XDkjkKFf4-BAxvKoJ_okbaVk7s0A=s48-c-k-c0x00ffffff-no-rj" />
            <NameAndSubWrapper>
              <ChannelName>Arsenal</ChannelName>
              <Subscribers>3.44M subscribers</Subscribers>
            </NameAndSubWrapper>
            <SubscribeButton>Subscribe</SubscribeButton>
          </ChannelInfo>
          <VideoFeatures>
            <FeatureItem>
              <ThumbUpOutlinedIcon />
              <span>16K</span>
              <Separator></Separator>
              <ThumbDownOutlinedIcon />
            </FeatureItem>
            <FeatureItem>
              <ShareOutlinedIcon />
              <span>Share</span>
            </FeatureItem>
            <FeatureItem>
              <LibraryAddOutlinedIcon />
              <span>Save</span>
            </FeatureItem>
          </VideoFeatures>
        </MainInfo>
        <DescriptionBox>
          <ViewsandTimeWrapper>
            <Views>664K views</Views>
            <UploadTime>12 hours ago</UploadTime>
          </ViewsandTimeWrapper>
          <DescriptionText>
            Enjoy match highlights, training and behind the scenes to get closer
            to the likes of Bukayo Saka, Martin Odegaard, Emile Smith Rowe,
            Vivianne Miedema, Gabriel Jesus, Alex Zinchenko, Leah Williamson,
            Takehiro Tomiyasu, Kim Little, Gabriel Martinelli, Aaron Ramsdale,
            Beth Mead, Ben White and more.
          </DescriptionText>
        </DescriptionBox>
        <CommentsSection>
          {Array(10)
            .fill(undefined)
            .map((_, index) => {
              return (
                <Comment
                  key={index}
                  likes={13}
                  time="13 hours ago"
                  iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3gNSPVEkZs0YPNs1Gqzpmmha088_t2C-0A&usqp=CAU"
                  handle="@acbde"
                  replies={["hi", "hi2"]}
                  text="Nice video"
                />
              );
            })}
        </CommentsSection>
      </Wrapper>
      <Recommendations>
        {/* <Card width="100%" />
        <Card width="100%" />
        <Card width="100%" />
        <Card width="100%" />
        <Card width="100%" />
        <Card width="100%" />
        <Card width="100%" /> */}
      </Recommendations>
    </Container>
  );
}

export default Video;
