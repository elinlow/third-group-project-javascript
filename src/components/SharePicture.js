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
    <div className="SharePictureBtn">
      <label className="upload-button" htmlFor="upload-button">
        {imageURLs.map((imageSrc) => (
          <img
            key={"imgKey"}
            src={imageSrc}
            alt="uploaded img"
            width="100%"
            height="50%"
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
    </div>
  );
}
