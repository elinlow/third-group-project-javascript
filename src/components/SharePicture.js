import React, { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";

export default function SharePictures() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  const buttonStyle = {
    visibility: "hidden",
  };

  return (
    <div>
      {/* <Container fluid="md"> */}
      <label htmlFor="upload-button">
        {imageURLs.map((imageSrc) => (
          <img
            key={"imgKey"}
            src={imageSrc}
            alt="uploaded img"
            width="300"
            height="300"
          />
        ))}
        <div>
          <h5 style={{ fontSize: "55px" }}>+</h5>
        </div>
      </label>
      <input
        type="file"
        style={buttonStyle}
        id="upload-button"
        multiple
        accept="images/*"
        onChange={onImageChange}
      />
      {/* </Container> */}
    </div>
  );
}
