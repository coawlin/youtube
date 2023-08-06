import { styled } from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import { ReactComponent as YoutubeShortsSvg } from "../assets/iconpacks-youtube-shorts.svg";
import { ReactComponent as YoutubeMusicSvg } from "../assets/icons8-youtube-music.svg";
import { ReactComponent as YoutubeKidsSvg } from "../assets/icons8-youtube-kids.svg";
import { ReactComponent as YoutubeSvg } from "../assets/icons8-youtube.svg";
import SvgIcon from "./SvgIcon";
import SignInButton from "./SignInButton";

const Container = styled.div`
  flex: 1;
  margin-top: 50px;
  height: calc(100vh - 50px);
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    background: ${(props) => props.theme.bg};
    width: 6px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.textSoft};
    border-radius: 15px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;
const SectionTitle = styled.h3`
  font-weight: normal;
  margin-left: 10px;
`;
const Item = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;

  &:hover {
    background-color: ${(props) => props.theme.bgLighter};
  }
`;
const Text = styled.span`
  margin: 10px;
`;

function Menu() {
  return (
    <Container>
      <Section>
        <Item>
          <HomeIcon /> Home
        </Item>
        <Item>
          <SvgIcon>
            <YoutubeShortsSvg />
          </SvgIcon>
          Shorts
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon /> Subscription
        </Item>
      </Section>
      <Section>
        <Item>
          <VideoLibraryOutlinedIcon /> Library
        </Item>
        <Item>
          <HistoryOutlinedIcon /> History
        </Item>
      </Section>
      <Section>
        <Text>Sign in to like videos, comment, and subscribe.</Text>
        <SignInButton style={{ marginLeft: "10px", marginBottom: "10px" }} />
      </Section>
      <Section>
        <SectionTitle>Explore</SectionTitle>
        <Item>
          <WhatshotOutlinedIcon /> Trending
        </Item>
        <Item>
          <MusicNoteOutlinedIcon /> Music
        </Item>
        <Item>
          <MovieCreationOutlinedIcon /> Movies
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon /> Gaming
        </Item>
        <Item>
          <NewspaperOutlinedIcon /> News
        </Item>
        <Item>
          <EmojiEventsOutlinedIcon /> Sports
        </Item>
        <Item>
          <CheckroomOutlinedIcon /> Fashion & Beauty
        </Item>
      </Section>
      <Section>
        <Item>
          <AddCircleOutlineOutlinedIcon /> Browse channels
        </Item>
      </Section>
      <Section>
        <SectionTitle>More from iTube</SectionTitle>
        <Item>
          <SvgIcon>
            <YoutubeSvg />
          </SvgIcon>
          iTube Premium
        </Item>
        <Item>
          <SvgIcon>
            <YoutubeMusicSvg />
          </SvgIcon>
          iTube Music
        </Item>
        <Item>
          <SvgIcon>
            <YoutubeKidsSvg />
          </SvgIcon>
          iTube Kids
        </Item>
      </Section>
      <Section>
        <Item>
          <SettingsOutlinedIcon /> Settings
        </Item>
        <Item>
          <FlagOutlinedIcon /> Report History
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon /> Help
        </Item>
        <Item>
          <FeedbackOutlinedIcon /> Send feeback
        </Item>
      </Section>
    </Container>
  );
}

export default Menu;
