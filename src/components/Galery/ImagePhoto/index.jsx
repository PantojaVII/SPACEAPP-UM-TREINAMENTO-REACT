import { styled } from "styled-components"
import { AiFillHeart, AiOutlineExpandAlt, AiOutlineHeart } from "react-icons/ai"

const ImagePhotoStyle = styled.figure`
margin: 0px ;
width: ${props => props.$sizeImage};
display: flex;
flex-direction: column;
background-color: #001634;
color: white;
border-radius: 25px;
img{
border-radius: 25px 25px 0 0;  
}
figcaption{
    padding: 16px 16px;
}
h3{
   margin : 0;
}
footer{
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    
}
footer i{
    font-size: 24px;
    margin-left: 14px;
}
footer .font{
    justify-content: flex-start;
}
footer div{
    justify-content: flex-end;
   
}
;
`

const ImagePhoto = ({ photo, expand = false, SelectedPhoto, sizeImage = '430px', onfavoritePhotos }) => {
    return (
        <ImagePhotoStyle $sizeImage={sizeImage}>
            <img src={photo.path} alt={photo.title} />
            <figcaption>
                <h3>{photo.title}</h3>
                <footer>
                    <div className="font">Fonte: {photo.font}</div>
                    <div>
                        {
                            photo.favorite ?
                                <i onClick={() => onfavoritePhotos(photo.id)}><AiFillHeart /></i> :
                                <i onClick={() => onfavoritePhotos(photo.id)}><AiOutlineHeart /></i>
                        }
                        {!expand ? <i onClick={() => SelectedPhoto(photo)}><AiOutlineExpandAlt /></i> : ""}
                    </div>
                </footer>
            </figcaption>
        </ImagePhotoStyle>
    )
}

export default ImagePhoto