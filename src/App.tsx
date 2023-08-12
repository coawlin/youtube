import { ThemeProvider, styled } from "styled-components";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/theme";
import { Route, Routes } from "react-router-dom";
import Video from "./pages/Video";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="video">
              <Route path=":id" element={<Video />} />
            </Route>
          </Routes>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
