import { styled } from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

type ButtonProps = {
  style?: React.CSSProperties;
};

const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  border: 1px solid #065fd4;
  border-radius: 15px;
  padding: 3px 8px;
  color: #065fd4;
  width: 100px;

  &:hover {
    background-color: #def1ff;
  }
`;

function SignInButton({ style }: ButtonProps) {
  return (
    <Container style={style}>
      <AccountCircleOutlinedIcon />
      Sign in
    </Container>
  );
}

export default SignInButton;
