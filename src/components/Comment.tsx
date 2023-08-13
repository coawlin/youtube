import { styled } from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

type CommentProps = {
  iconUrl: string;
  handle: string;
  time: string;
  text: string;
  likes: number;
  replies: string[];
};

const Container = styled.div`
  display: flex;
  margin: 10px 0 30px;
`;
const ChannelImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 10px;
`;
const HandleAndTimeWrapper = styled.div``;
const Handle = styled.span``;
const Time = styled.span`
  margin-left: 5px;
`;
const ActionItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
`;
const Replies = styled.div`
  display: flex;
  align-items: center;
`;

function Comment(props: CommentProps) {
  return (
    <Container>
      <ChannelImg src={props.iconUrl} />
      <Wrapper>
        <HandleAndTimeWrapper>
          <Handle>{props.handle}</Handle>
          <Time>{props.time}</Time>
        </HandleAndTimeWrapper>
        {props.text}
        <ActionItems>
          <Item>
            <ThumbUpOutlinedIcon />
            {props.likes}
          </Item>
          <Item>
            <ThumbDownOutlinedIcon />
          </Item>
          <Item>Reply</Item>
        </ActionItems>
        <Replies>
          <ExpandMoreOutlinedIcon />
          14 Replies
        </Replies>
      </Wrapper>
    </Container>
  );
}

export default Comment;
