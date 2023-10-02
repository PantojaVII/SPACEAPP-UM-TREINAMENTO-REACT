import { styled } from "styled-components"

const ChanelStyle = styled.div`
display: flex;
align-items: center;
gap: 16px;
margin-top: 32px;
`
const ChanelH3Style = styled.div`
font-size : 24px ;
color: white;
font-family: 'GandhiSansRegular';

`
const ChanelSectionStyle = styled.div`
 flex-grow: 1;


`
const ButtonStyled = styled.button`
 
    width: auto;
    padding: 8px;
    border-radius:10px ;
    text-decoration: none;
    color: white;
    font-family: 'GandhiSansRegular';
    background-color: #424d63a6;
    margin-right: 18px;
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.$Selected ? '#7B74D1' : "#424d63a6"};
    
    cursor: pointer;
 
 `

const Chanel = (props) => {
    return (
        <ChanelStyle>
            <ChanelH3Style>
                {props.title}
            </ChanelH3Style>
            <ChanelSectionStyle>
                {props.tags.map(tag => (
                    <ButtonStyled
                        onClick={() => props.onChanel(tag.id)}
                        $Selected={tag.selected}
                        key={tag.id}
                    >
                        {tag.title}
                    </ButtonStyled>
                ))}
            </ChanelSectionStyle>
        </ChanelStyle>
    )
}
export default Chanel