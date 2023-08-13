import { styled } from "styled-components";
import { Link } from "react-router-dom";

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
const MoreInfo = styled.div`
  display: flex;
  gap: 2px;
`;
const ChannelName = styled(DescriptionText)``;
const UploadTime = styled(DescriptionText)``;
const Views = styled(DescriptionText)``;

function Card({ width }: CardProps) {
  return (
    <Container $width={width} to="video/test">
      <Thumbnail src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKEjSXPfT9964KguZORvSuvHNVS6bIqxopAg&usqp=CAU" />
      <Wrapper>
        <ChannelImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3gNSPVEkZs0YPNs1Gqzpmmha088_t2C-0A&usqp=CAU" />
        <Description>
          <Title>
            Positive Vibes Music Top100 freestar freestar Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.on porttitor sem. Ph
          </Title>
          <ChannelName>Dreamy Vibez</ChannelName>
          <MoreInfo>
            <Views>2.4M views · </Views>
            <UploadTime>2 months ago</UploadTime>
          </MoreInfo>
        </Description>
      </Wrapper>
    </Container>
  );
}

export default Card;
