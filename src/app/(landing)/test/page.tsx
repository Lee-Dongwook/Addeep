"use client";

import React from "react";

export default function Test() {
  const danceVideoSrc =
    "https://storage.googleapis.com/assets-addeep/images/Dance.MP4";
  const coupleVideoSrc =
    "https://storage.googleapis.com/assets-addeep/images/Couple.MP4";
  const skateboardVideoSrc =
    "https://storage.googleapis.com/assets-addeep/images/SkateBoard.MP4";
  const broadcastVideoSrc =
    "https://storage.googleapis.com/assets-addeep/images/BroadCast.MP4";
  return (
    <div className="flex flex-col gap-4">
      <video
        src={danceVideoSrc}
        autoPlay
        loop
        muted
        controls
        playsInline
        style={{ width: "100%", height: "auto", background: "#000" }}
        preload="metadata"
      />
      <video
        src={coupleVideoSrc}
        autoPlay
        loop
        muted
        controls
        playsInline
        style={{ width: "100%", height: "auto", background: "#000" }}
        preload="metadata"
      />
      <video
        src={skateboardVideoSrc}
        autoPlay
        loop
        muted
        controls
        playsInline
        style={{ width: "100%", height: "auto", background: "#000" }}
        preload="metadata"
      />
      <video
        src={broadcastVideoSrc}
        autoPlay
        loop
        muted
        controls
        playsInline
        style={{ width: "100%", height: "auto", background: "#000" }}
        preload="metadata"
      />
    </div>
  );
}
