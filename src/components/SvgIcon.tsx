import { PropsWithChildren } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
`;

function SvgIcon({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}

export default SvgIcon;
