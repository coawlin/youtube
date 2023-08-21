import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { BasePath } from "../utils/constants";
import { Video } from "../pages/Home";

type CardProps = {
  width?: string;
};

const Container = styled(Link)<{ $width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) =>
    props.$width ? props.$width : "calc((100% / var(--items-per-row)) - 20px)"};
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 40px;
  gap: 5px;
  text-decoration: none;
`;
const ThumbnailWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`;
const Thumbnail = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/8.7;
`;
const Duration = styled.p`
  display: block;
  position: absolute;
  background-color: ${(props) => props.theme.bgReverse};
  color: ${(props) => props.theme.bg};
  font-size: 0.9em;
  bottom: 5px;
  right: 5px;
  padding: 2px 5px;
  border-radius: 5px;
`;
const ChannelImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const DescriptionText = styled.span`
  color: ${(props) => props.theme.textSoft};
`;
const Title = styled.h1`
  display: -webkit-box;
  font-size: 1.1em;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;
const MoreInfo = styled(DescriptionText)``;
const ChannelTitle = styled(DescriptionText)``;

function Card(props: CardProps & Video) {
  const {
    width,
    id,
    title,
    channelTitle,
    views,
    publishedAt,
    channelImg,
    thumbnail,
    duration,
  } = props;

  const convertDuration = (duration: string) => {
    const timeParts = duration
      .replace("PT", "")
      .replace("S", "")
      .replace("M", ":")
      .replace("H", ":")
      .split(":");

    for (let i = 0; i < timeParts.length; i++) {
      if (i !== 0) {
        timeParts[i] = timeParts[i].padStart(2, "0");
      }
    }

    return timeParts.join(":");
  };

  return (
    <Container
      $width={width}
      to={{ pathname: `${BasePath}/video/${id}` }}
      relative="route"
    >
      <ThumbnailWrapper>
        <Thumbnail src={`${thumbnail.high.url}`} />
        <Duration>{convertDuration(duration)}</Duration>
      </ThumbnailWrapper>
      <Wrapper>
        <ChannelImg src={`${channelImg.high.url}`} />
        <Description>
          <Title>{title}</Title>
          <ChannelTitle>{channelTitle}</ChannelTitle>
          <MoreInfo>
            {views} views ·{publishedAt}
          </MoreInfo>
        </Description>
      </Wrapper>
    </Container>
  );
}

export default Card;
