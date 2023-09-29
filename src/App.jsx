import { styled } from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Highlights from "./components/Highlights";
import Main from "./components/Main";


//deve iniciar com letras maisculas o styled components
const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  padding: 20px;
  min-height: 100vh;
 
`;

function App() {


  return (
    <BackgroundGradient>
      <GlobalStyles />
      <Header />
      <Main>
        <Sidebar />
        <Highlights
         textHighlights={'A galeria Mais completa de fotos do espaço !'} 
         Backgroud={'Foto destaque.png'} />
      </Main>
    </BackgroundGradient>
  )
}

export default App
