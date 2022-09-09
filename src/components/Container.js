import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Box } from "@mui/material";
import Container from "@mui/material/Container";
import Header from "./Header";
import Form from "./Form";
import Happy from "./../data/happy.mp3";
import MyPage from "./MyPage/MyPage";
import ReactAudioPlayer from "react-audio-player";

const FixedContainer = () => {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {" "}
          <audio autoPlay>
            <source src={Happy} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          {/* <ReactAudioPlayer src={Happy} autoPlay controls muted /> */}
        </div>
        <Box
          sx={{
            height: "100vh",
          }}
        >
          <MyPage />
        </Box>
      </Container>
    </>
  );
};

export default FixedContainer;
