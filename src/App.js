import React from "react";
import profileImg from "./profile-img.png";
import "./elliot.css";
import { Container } from "react-bootstrap";

// import SharePicture from "./components/SharePicture";
import "./App.css";
import UserBio from "./components/UserBio";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "react-bootstrap";
import SharePictures from "./components/SharePicture";

function App() {
  return (
    <>
      <div className="App">
        <Stack gap={2} className="col-md-5 mx-auto">
          <img
            className="m-auto"
            src={profileImg}
            alt="Profile Img"
            style={{ width: 200, height: 200 }}
          />
          <UserBio></UserBio>
        </Stack>
      </div>
      <Container>
        <div className="SharePicture m-5 p-5">
          <SharePictures></SharePictures>
        </div>
      </Container>
    </>
  );
}

export default App;
