import { ThemeProvider, styled } from "styled-components";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/theme";
import { Outlet } from "react-router-dom";

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
          <Outlet />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
