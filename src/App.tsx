import { ThemeProvider, styled } from "styled-components";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Main from "./components/Main";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/theme";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  flex: 7;
  margin-top: 60px;
`;

function App() {
  const [isDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Navbar></Navbar>
        <Menu></Menu>
        <Wrapper>
          <Main></Main>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
