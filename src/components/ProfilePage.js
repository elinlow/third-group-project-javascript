import React from "react";
import SharePictures from "./SharePicture";
import UserBio from "./UserBio";
import MainHeader from "./MainHeader";
import ProfilePic from "../assets/profile-picture.png";
import { Container, Stack } from "react-bootstrap";

function ProfilePage() {
  return (
    <>
      <MainHeader></MainHeader>
      <div>
        <Stack gap={2} className="col-md-5 mx-auto py-3">
          <div className="ProfilePic">
            <img
              className="img-fluid mx-auto py-3"
              src={ProfilePic}
              alt="User"
            ></img>
          </div>
          <UserBio></UserBio>
        </Stack>
      </div>
      <Container className="SharePicture my-5 p-5">
        <SharePictures></SharePictures>
      </Container>
    </>
  );
}

export default ProfilePage;
