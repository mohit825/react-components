import React, { useEffect, useState } from "react";

const ImageSlider = ({ photos }) => {
  const [visiblePhotoId, setVisiblePhotoId] = useState(0);

  const onHandleClick = (val) => {
    if ("next" === val) {
      setVisiblePhotoId((id) => (id + 1) % photos?.length);
    } else {
      setVisiblePhotoId((id) => (id - 1 < 0 ? photos.length - 1 : id - 1));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onHandleClick("next");
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className=" mt-8 flex justify-center items-center">
      <div className="cursor-pointer" onClick={() => onHandleClick("prev")}>
        ⏮️
      </div>
      <img
        src={photos[visiblePhotoId]}
        alt="random photo"
        width="90%"
        className="h-[200px] object-cover"
      />

      <div className="cursor-pointer" onClick={() => onHandleClick("next")}>
        ⏭️
      </div>
    </div>
  );
};

export default ImageSlider;
