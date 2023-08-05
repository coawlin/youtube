import { styled } from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import AddCircleOutlineOutlined from "@mui/icons-material/AddCircleOutlineOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import FlagOutlined from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlined from "@mui/icons-material/FeedbackOutlined";
import YoutubeShortsSvg from "../assets/iconpacks-youtube-shorts.svg";
import YoutubeMusicSvg from "../assets/icons8-youtube-music.svg";
import YoutubeKidsSvg from "../assets/icons8-youtube-kids.svg";
import YoutubeSvg from "../assets/icons8-youtube.svg";
import Icon from "./Icon";

const Container = styled.div`
  flex: 1;
  margin-top: 70px;
  height: calc(100vh - 70px);
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
const Section = styled.div<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.padding ? props.padding : "10px 15px")};
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

  svg {
  }

  &:hover {
    background-color: ${(props) => props.theme.bgLighter};
  }
`;
const Text = styled.span`
  margin: 10px;
`;

const SignInButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  border: 1px solid #065fd4;
  border-radius: 15px;
  padding: 3px 8px;
  color: #065fd4;
  width: 100px;
  margin-bottom: 10px;
  margin-left: 10px;

  &:hover {
    background-color: #def1ff;
  }
`;

function Menu() {
  return (
    <Container>
      <Section>
        <Item>
          <HomeIcon /> Home
        </Item>
        <Item>
          <Icon src={YoutubeShortsSvg} alt="youtube-shorts" /> Shorts
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
        <SignInButton>
          <AccountCircleOutlinedIcon />
          Sign in
        </SignInButton>
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
          <AddCircleOutlineOutlined /> Browse channels
        </Item>
      </Section>
      <Section>
        <SectionTitle>More from iTube</SectionTitle>
        <Item>
          <Icon src={YoutubeSvg} alt="youtube" /> iTube Premium
        </Item>
        <Item>
          <Icon src={YoutubeMusicSvg} alt="youtube-music" /> iTube Music
        </Item>
        <Item>
          <Icon src={YoutubeKidsSvg} alt="youtube-kids" /> iTube Kids
        </Item>
      </Section>
      <Section>
        <Item>
          <SettingsOutlined /> Settings
        </Item>
        <Item>
          <FlagOutlined /> Report History
        </Item>
        <Item>
          <HelpOutlineOutlined /> Help
        </Item>
        <Item>
          <FeedbackOutlined /> Send feeback
        </Item>
      </Section>
    </Container>
  );
}

export default Menu;
