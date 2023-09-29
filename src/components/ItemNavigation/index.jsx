import { styled } from "styled-components";

const ItemNavigationStyled = styled.li`
  display: flex;
  align-items: center;
  margin-top: 24px;
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;

  a {
    margin-left: 24px;
    text-decoration: none;
    color: ${props => props.$Activate ? '#7b78e5' : '#D9D9D9'};
    font-family: ${props => props.$Activate ? 'GandhiSansBold' : 'GandhiSansRegular'};
  }
`;

const ItemNavigation = ({ children, iconActivate, iconDesactivate, Activate = false }) => {
    return (
        <ItemNavigationStyled $Activate={Activate}>
            <img src={Activate ? iconActivate : iconDesactivate} alt="" />
            <a href="">{children}</a>
        </ItemNavigationStyled>
    );
};

export default ItemNavigation;
