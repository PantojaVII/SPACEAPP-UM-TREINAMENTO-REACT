import { styled } from "styled-components";

const HighlightsStyle = styled.div`
  display: flex;
  justify-content: left; /* Centraliza verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  background-image: url('/images/${props => props.$Backgroud}'); /*pegando a imagem */
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
 
  min-height: 400px;
  font-family: 'GandhiSansRegular';
 
  
`;

const TextHighlightsStyled = styled.p`
  font-size: 40px;
  color: white;
  margin-left: 80px;
  width: 300px;
`;

const Highlights = ({ textHighlights, Backgroud }) => {
  return (
    <HighlightsStyle $Backgroud={Backgroud}>
      <TextHighlightsStyled >
        {textHighlights}
      </TextHighlightsStyled>
    </HighlightsStyle>
  );
};

export default Highlights;
