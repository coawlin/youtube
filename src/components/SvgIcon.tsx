import { PropsWithChildren } from "react";
import { styled } from "styled-components";

type Size = "sm" | "md";

const Container = styled.div<{ $size: Size }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.$size === "md" ? "2.5em" : "1.5em")};
  height: ${(props) => (props.$size === "md" ? "2.5em" : "1.5em")};
`;

function SvgIcon({
  children,
  size = "sm",
}: PropsWithChildren<{ size?: Size }>) {
  return <Container $size={size}>{children}</Container>;
}

export default SvgIcon;
