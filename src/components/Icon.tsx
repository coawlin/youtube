import { styled } from "styled-components";

type IconProps = {
  src: string;
  alt: string;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
`;
const Image = styled.img`
  width: 1.25em;
  height: 1.25em;
`;

function Icon({ src, alt }: IconProps) {
  return (
    <Container>
      <Image src={src} alt={alt} />
    </Container>
  );
}

export default Icon;
