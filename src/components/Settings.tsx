import { styled } from "styled-components";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import withDropdown from "./Dropdown";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: ${(props) => props.theme.bg};
  border-radius: 10px;
  box-shadow: 0 3px 8px 1px rgba(216, 217, 237, 0.3);
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;

  &:hover {
    background-color: ${(props) => props.theme.bgLighter};
  }
`;

function Settings() {
  return (
    <Container>
      <Section>
        <Item>
          <PrivacyTipOutlinedIcon /> Your data in Youtube
        </Item>
      </Section>
      <Section>
        <Item>
          <ModeNightOutlinedIcon /> Appearance: Device theme
        </Item>
        <Item>
          <TranslateOutlinedIcon /> Language: English
        </Item>
        <Item>
          <AdminPanelSettingsOutlinedIcon /> Restricted Mode: Off
        </Item>
        <Item>
          <PublicOutlinedIcon /> Location: Singapore
        </Item>
        <Item>
          <KeyboardOutlinedIcon /> Keyboard shortcuts
        </Item>
      </Section>
      <Section>
        <Item>
          <SettingsOutlinedIcon /> Settings
        </Item>
      </Section>
      <Section>
        <Item>
          <HelpOutlineOutlinedIcon /> Help
        </Item>
        <Item>
          <FeedbackOutlinedIcon /> Send feedback
        </Item>
      </Section>
    </Container>
  );
}

const DropDownSettings = withDropdown(Settings);
export default DropDownSettings;
