import { styled } from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: calc(100vh - 60px);

  &::-webkit-scrollbar {
    background: ${(props) => props.theme.bg};
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.textSoft};
    border-radius: 15px;
  }
`;

function Home() {
  return (
    <Container>
      {Array(20)
        .fill(undefined)
        .map((_, index) => (
          <Card key={index} />
        ))}
    </Container>
  );
}

export default Home;
