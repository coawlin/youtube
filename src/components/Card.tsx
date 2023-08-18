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
const Thumbnail = styled.img`
  object-fit: cover;
  height: 200px;
  border-radius: 10px;
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
const Title = styled.div`
  display: -webkit-box;
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
  } = props;
  return (
    <Container
      $width={width}
      to={{ pathname: `${BasePath}/video/${id}` }}
      relative="route"
    >
      <Thumbnail src={`${thumbnail.high.url}`} />
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
