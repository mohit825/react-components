import React from "react";

const MemeCard = ({ meme, onMemeClick }) => {
  const { url, author, thumbnail } = meme;
  return (
    <div
      className="p-5 m-5 border border-black rounded-lg cursor-pointer"
      onClick={() => onMemeClick(meme)}
      data-testid="meme-card"
    >
      <img
        src={url || thumbnail}
        alt={author}
        className="w-64 h-64"
        loading="lazy"
      />
      <p className="p-1">{author}</p>
    </div>
  );
};

export default MemeCard;
