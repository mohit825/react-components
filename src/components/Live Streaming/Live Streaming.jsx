import React from "react";
import ChatWindow from "./ChatWindow";

const LiveStreaming = () => {
  return (
    <div className="flex row gap-3">
      <main className=" mt-2 ml-2">
        <iframe
          className="rounded-md"
          width="900"
          height="500"
          src="https://www.youtube.com/embed/Nq2wYlWFucg?si=Uv2T-d6nzu6wJ25s&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </main>
      <ChatWindow />
    </div>
  );
};

export default LiveStreaming;
