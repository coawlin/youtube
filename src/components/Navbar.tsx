import { styled } from "styled-components";
const Container = styled.div`
  height: 70px;
  position: fixed;
  width: 100vw;
`;
const HamburgerMenu = styled.div``;
const HomeButton = styled.div``;
const SignInButton = styled.button``;
const SearhBar = styled.input``;

function Navbar() {
  return (
    <Container>
      Navbar
      <HamburgerMenu></HamburgerMenu>
      <HomeButton></HomeButton>
      <SignInButton></SignInButton>
      <SearhBar></SearhBar>
    </Container>
  );
}

export default Navbar;
