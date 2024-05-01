import React from "react";
import ReactAudioPlayer from "react-audio-player";
import thala_sound from "../assets/soundbro.mp3";

function AudioPlayer() {
  return <ReactAudioPlayer src={thala_sound} autoPlay controls />;
}

export default AudioPlayer;
