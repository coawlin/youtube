import { styled } from "styled-components";
import SignInButton from "./SignInButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MicIcon from "@mui/icons-material/Mic";
import { ReactComponent as YoutubeSvg } from "../assets/icons8-youtube.svg";
import SvgIcon from "./SvgIcon";
import { useState } from "react";
import DropDownSettings from "./Settings";

const Container = styled.div`
  height: 60px;
  position: fixed;
  width: 100vw;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
`;
const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 10px;

  &:hover {
    background-color: ${(props) => props.theme.bgLighter};
  }
`;
const HamburgerMenuLine = styled.div<{ $width: string }>`
  background-color: ${(props) => props.theme.text};
  width: ${(props) => props.$width};
  height: 2px;
`;
const LogoText = styled.h2`
  color: ${(props) => props.theme.text};
`;
const HomeButton = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;
const SearchBarOuterContainer = styled.div`
  width: 700px;
`;
const SearchBarInnerContainer = styled.div<{ $isInputFocused: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid
    ${(props) => (props.$isInputFocused ? "#065fd4" : props.theme.bgLighter)};
  border-radius: 20px 0 0 20px;
  margin-left: ${(props) => (props.$isInputFocused ? "0" : "44px")};
  padding-left: ${(props) => (props.$isInputFocused ? "44px" : "0")};
`;
const SearhBar = styled.input`
  height: 20px;
  padding: 20px 10px;
  width: 100%;

  &:focus-visible {
    outline: none;
  }
`;
const SearchLogoContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0 20px 20px 0;
  background-color: ${(props) => props.theme.bgLighter};
  padding: 10px 10px 10px;
`;
const MicIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgLighter};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 20px;
`;
const SettingContainer = styled.div`
  position: relative;
`;
function Navbar() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleFocus = () => {
    setIsInputFocused((isFocus) => {
      return !isFocus;
    });
  };

  return (
    <Container>
      <Section>
        <HamburgerMenu>
          <HamburgerMenuLine $width={"20px"} />
          <HamburgerMenuLine $width={"20px"} />
          <HamburgerMenuLine $width={"20px"} />
        </HamburgerMenu>
        <HomeButton>
          <SvgIcon size="md">
            <YoutubeSvg />
          </SvgIcon>
          <LogoText>iTube</LogoText>
        </HomeButton>
      </Section>
      <Section>
        <SearchBarOuterContainer>
          <SearchBarInnerContainer $isInputFocused={isInputFocused}>
            <SearchOutlinedIcon
              style={{
                display: isInputFocused ? "block" : "none",
                margin: "0 10px",
                position: "absolute",
                left: "0",
              }}
            />
            <SearhBar
              placeholder="Search"
              onFocus={handleFocus}
              onBlur={handleFocus}
            ></SearhBar>
          </SearchBarInnerContainer>
        </SearchBarOuterContainer>
        <SearchLogoContainer>
          <SearchOutlinedIcon />
        </SearchLogoContainer>
        <MicIconContainer>
          <MicIcon />
        </MicIconContainer>
      </Section>
      <Section>
        <SettingContainer>
          <DropDownSettings style={{ marginRight: "10px" }}>
            <HamburgerMenu>
              <HamburgerMenuLine $width={"2px"} />
              <HamburgerMenuLine $width={"2px"} />
              <HamburgerMenuLine $width={"2px"} />
            </HamburgerMenu>
          </DropDownSettings>
        </SettingContainer>
        <SignInButton />
      </Section>
    </Container>
  );
}

export default Navbar;
