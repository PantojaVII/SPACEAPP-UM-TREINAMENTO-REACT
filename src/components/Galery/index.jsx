import { styled } from "styled-components";
import Title from "../Title";
import ImagePhoto from "./ImagePhoto";
import ImagePhotoDestaque from "./ImagePhotoDestaque";
/* 
O valor 1 em flex-grow: 1 significa que o elemento com essa regra tem a capacidade de crescer e ocupar espaço disponível em relação aos outros elementos flexíveis no mesmo contêiner.

Se todos os elementos flexíveis tiverem flex-grow: 1, eles compartilharão igualmente o espaço disponível e aumentarão ou diminuirão em tamanho de maneira uniforme para preencher o espaço disponível no contêiner.

Se um elemento tiver flex-grow: 2 e outro tiver flex-grow: 1, o primeiro elemento crescerá duas vezes mais rápido que o segundo elemento em relação ao espaço disponível.
 */
const ContentGaleryStyle = styled.div`
display : flex;
width: 100%;
`

const SectioGaleryStyle = styled.section`
flex-grow: 1; 

 div{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 16px;
    
 }
`
const SectioGaleryHighlights = styled.section`
 text-align: right;
 button{
    background-color: transparent;
    color: white;
    font-family: 'GandhiSansRegular';
    width: 100%;
    height: 60px;
    border: 2px solid;
    border-color: #C98CF1;
    border-radius: 14px;
    transition: background-color 0.3s, color 0.3s; /* Adicionando transições para suavizar a mudança de cor */
 }
 button:hover {
  background-color: #C98CF1; /* Mudando a cor de fundo no hover */
  color: white; /* Mantendo a cor do texto branca no hover */
  cursor: pointer; /* Alterando o cursor para indicar interatividade */
}
`

const Galery = ({
    photosGalery = [],
    aoPhotoSelected,
    photosGaleryDestaque = [],
    onfavoritePhotos
}) => {
    return (
        <>

            <ContentGaleryStyle>

                <SectioGaleryStyle>

                    <Title>Navegue pela galeria</Title>
                    <div>
                        {photosGalery.map(photo =>
                            <ImagePhoto
                                SelectedPhoto={aoPhotoSelected}
                                onfavoritePhotos={onfavoritePhotos}
                                key={photo.id}
                                photo={photo}
                            />
                        )}
                    </div>
                </SectioGaleryStyle>

                <SectioGaleryHighlights>

                    <Title>Destaques</Title>
                    {
                        photosGaleryDestaque.map(photoGaleryDestaque =>
                            <ImagePhotoDestaque
                                photo={photoGaleryDestaque}
                            />
                        )
                    }
                    <button>ver mais</button>

                </SectioGaleryHighlights>

            </ContentGaleryStyle>
        </>
    )
}

export default Galery;