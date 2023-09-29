import { styled } from "styled-components";

const MainStyle = styled.main`
  display: flex;
  gap: 24px;
`;

const Main = ({children}) => {
  return (
    <MainStyle>
       {children} 
    </MainStyle>
  );
};

export default Main;
