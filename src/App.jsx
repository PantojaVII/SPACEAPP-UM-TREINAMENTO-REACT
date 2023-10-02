import { styled } from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Highlights from "./components/Highlights";
import Main from "./components/Main";
import Galery from "./components/Galery";
import Chanel from "./components/Chanel";
import photos from '../public/fotos.json'
import photosDestaque from '../public/destaques.json'
import { useState } from "react";
import Modal from "./components/Modal";
import tags from './components/Chanel/tags.json'

//deve iniciar com letras maisculas o styled components
const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  max-width: 100%;
  min-height: 100vh;
 
`;
const AppContainer = styled.div`
 width: 1440px;
 margin: 0 auto;
 max-width: 100%;
`;

/* A main fizemos um component, não é necessário, a estrutura bruta, podemos fazer direto na página */

const ContentGalery = styled.section`
display: flex;
width: 100%;
flex-direction: column;
flex-wrap: 1;
`

/* é uma característica introduzida no React 16.8 como parte do conceito de Hooks.

Ambas as abordagens são válidas e têm o mesmo resultado final, mas existem algumas diferenças importantes entre elas:

Function Component (Versão Moderna): A partir do React 16.8, você também pode definir componentes como constantes de função (funções de componente Arrow) usando Hooks. Isso torna o código mais conciso e permite o uso de recursos como o estado e os ciclos de vida em componentes funcionais.

*/
const App = () => {

  const [photosGalery, setphotosGalery] = useState(photos)
  const [photosGaleryDestaque, setphotosGaleryDestaque] = useState(photosDestaque)
  const [photosSelected, setphotosSelected] = useState(null)
  const [favoritePhotos, setfavoritePhotos] = useState([])
  const [myTags, setmyTags] = useState(tags)

  function onFavoritePhotos(photoId) {
    // a interrogação significa que pode ser sulo, então ele vai executar essa função apenas se não for. bem interessante.
    if (photoId === photosSelected?.id) {
      setphotosSelected({
        ...photosSelected, favorite: !photosSelected.favorite
      })
    }
    // Crie uma cópia do array photosGalery com a propriedade "favorite" atualizada
    const updatedPhotosGalery = photosGalery.map(photo => {
      if (photo.id === photoId) {
        return { ...photo, favorite: !photo.favorite }; // Alterna o valor de "favorite"
      }
      return photo;
    });

    // Atualize o estado photosGalery com a nova versão
    setphotosGalery(updatedPhotosGalery);

  }
  function onChanel(tagId) {

    // Crie uma cópia das tags com a atualização de selected
    const updatedMyTags = myTags.map(tag => {
      if (tag.id === tagId) {
        return { ...tag, selected: !tag.selected };
      }
      return tag;
    });

    // Atualize myTags com a nova versão
    setmyTags(updatedMyTags);

    // Filtrar as fotos com base nas tags selecionadas
    const filteredPhotos = photos.filter(photo => {
      /* O método some é uma função de array em JavaScript que verifica se pelo menos um elemento do array atende a uma determinada condição.  */
      return updatedMyTags.some(tag => tag.selected && tag.id === photo.tagId);
    });

    // Atualize photosGalery com as fotos filtradas
    setphotosGalery(filteredPhotos);


  }


  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Main>
          <Sidebar />
          <ContentGalery>
            <Highlights
              textHighlights={'A galeria Mais completa de fotos do espaço !'}
              Backgroud={'Foto destaque.png'} />
            <Chanel tags={myTags} onChanel={onChanel} title={'Busque por tags:'}></Chanel>
            <Galery
              aoPhotoSelected={photo => setphotosSelected(photo)}
              photosGalery={photosGalery}
              photosGaleryDestaque={photosGaleryDestaque}
              onfavoritePhotos={onFavoritePhotos}
            />
          </ContentGalery>
        </Main>
      </AppContainer>
      <Modal onfavoritePhotos={onFavoritePhotos} photo={photosSelected} closeModal={close => setphotosSelected(close)} />
    </BackgroundGradient>
  )
}

export default App
