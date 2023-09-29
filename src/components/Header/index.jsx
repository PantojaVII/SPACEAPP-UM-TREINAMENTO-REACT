import { styled } from "styled-components";
import InputSearch from "../InputSearch";

const HeaderStyled = styled.header`
padding: 60px 0;
display: flex;
justify-content: space-between;
justify-items: center;
img{
    max-width: 212px;
}
`

const Header = () => {

    return (
        <HeaderStyled>
            <img src="/images/logo.png" alt="" />
            <InputSearch />
       
        </HeaderStyled>
    )

}

export default Header;