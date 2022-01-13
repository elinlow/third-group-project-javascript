import React, { useState, useEffect } from "react";

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
      <label htmlFor="upload-button">
        {images.preview ? (
          <img src={images.preview} alt="dummy" width="300" height="300" />
        ) : (
          <>
            <h5 style={{ fontSize: "55px" }}>+</h5>
          </>
        )}
      </label>
      <input
        type="file"
        style={buttonStyle}
        id="upload-button"
        multiple
        accept="images/*"
        onChange={onImageChange}
      />
      {imageURLs.map((imageSrc) => (
        <img alt="Your" src={imageSrc} width="300" height="300" />
      ))}
    </div>
  );
}
