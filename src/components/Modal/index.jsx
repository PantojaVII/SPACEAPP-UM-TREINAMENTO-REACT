import React from "react";
import styled from "styled-components";
import ImagePhoto from "../Galery/ImagePhoto";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogStyle = styled.dialog`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  background-color: transparent;
 border-style: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  font-size: 24px;
  line-height: 1;
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;

const Modal = ({ photo, key, closeModal, onfavoritePhotos }) => {
    return (
        <>
            {photo && (
                <>
                    <Overlay>
                        <DialogStyle open={!!photo}>
                            <CloseButton onClick={() => closeModal(null)}  >×</CloseButton>
                            <ImagePhoto photo={photo} expand={true} sizeImage="1200px" onfavoritePhotos={onfavoritePhotos} />

                        </DialogStyle>
                    </Overlay>
                </>
            )}
        </>
    );
};

export default Modal;
