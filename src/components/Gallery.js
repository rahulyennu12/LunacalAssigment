// components/Gallery.js
import React, { useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 10px;
`;

const AddImage = styled.button`
  background-color: #4A4A4A;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
`;

export default function Gallery() {
  const [images, setImages] = useState([]);

  const handleAddImage = () => {
    const newImage = prompt("Enter image URL");
    if (newImage) {
      setImages([...images, newImage]);
    }
  };

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <GalleryWrapper>
      <ArrowBackIosIcon style={{ color: 'white', cursor: 'pointer' }} />
      {images.map((img, index) => (
        <ImageWrapper key={index}>
          <Image src={img} alt={`Gallery Image ${index}`} />
          <DeleteButton onClick={() => handleDeleteImage(index)}>
            <DeleteIcon />
          </DeleteButton>
        </ImageWrapper>
      ))}
      <AddImage onClick={handleAddImage}>
        <AddIcon /> Add Image
      </AddImage>
      <ArrowForwardIosIcon style={{ color: 'white', cursor: 'pointer' }} />
    </GalleryWrapper>
  );
}
