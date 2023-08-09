import { styled } from "styled-components";
import {
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export interface withDropdownProps {
  children?: ReactNode;
  style?: CSSProperties;
}

// eslint-disable-next-line react-refresh/only-export-components
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

// eslint-disable-next-line react-refresh/only-export-components
const PanelWrapper = styled.div`
  position: absolute;
  width: 300px;
  left: -260px;
  top: 50px;
  background: ${(props) => props.theme.bg};
  border-radius: 10px;
  box-shadow: 0 3px 8px 1px rgba(216, 217, 237, 0.3);
`;

// eslint-disable-next-line react-refresh/only-export-components
const DropdownButtonContainer = styled.div`
  height: 40px;
  width: 40px;
`;

function withDropdown(Panel: FC<withDropdownProps>) {
  const DropdownPanel = ({ children, style }: withDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef<HTMLDivElement>(null);

    // React 18 behaviour
    // https://stackoverflow.com/a/72316006
    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsOpen((open) => !open);
    };

    useEffect(() => {
      const handler = ({ target }: MouseEvent) => {
        if (!dropDownRef.current?.contains(target as Node)) {
          setIsOpen(false);
        }
      };

      document.body.addEventListener("click", handler);

      return () => {
        document.body.removeEventListener("click", handler);
      };
    });

    return (
      <Container style={style}>
        <DropdownButtonContainer onClick={handleClick}>
          {children}
        </DropdownButtonContainer>
        {isOpen ? (
          <PanelWrapper ref={dropDownRef}>
            <Panel></Panel>
          </PanelWrapper>
        ) : null}
      </Container>
    );
  };
  return DropdownPanel;
}

export default withDropdown;
