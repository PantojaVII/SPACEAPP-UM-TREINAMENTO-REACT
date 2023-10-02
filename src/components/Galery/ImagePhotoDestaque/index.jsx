import { styled } from "styled-components"

const ImagePhotoDestaqueStyle = styled.img`
width: 100%;
margin-bottom: 16px;
border-radius: 25px;
`

const ImagePhotoDestaque = ({ photo }) => {
    return (
        <>
            <ImagePhotoDestaqueStyle src={photo.path} alt="" />
        </>
    )
}

export default ImagePhotoDestaque