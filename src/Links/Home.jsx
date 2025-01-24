import { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";
import ShimmerCard from "../components/ShimmerCard";
import Modal from "../components/Modal/Modal";

export const Home = () => {
  const [memes, setMemes] = useState([]);
  const [shimmerLoader, setShimmerLoader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState(null);

  const fetchMeme = async () => {
    setShimmerLoader(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const result = await data.json();
    setMemes((memes) => [...memes, ...result.memes]);
    setShimmerLoader(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1) {
      fetchMeme();
    }
  };

  useEffect(() => {
    fetchMeme();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onMemeClickHandler = (meme) => {
    console.log(meme, "m");
    setIsModalOpen(true);
    setSelectedMeme(meme);
  };

  const OnModalClose = () => {
    setIsModalOpen(false);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isModalOpen) {
      setScrollPosition(window.scrollY);
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      window.scrollTo(0, scrollPosition);
    }
  }, [isModalOpen]);

  return (
    <div className="flex flex-wrap gap-2">
      {memes?.map((meme, i) => {
        return (
          <MemeCard meme={meme} key={i} onMemeClick={onMemeClickHandler} />
        );
      })}
      {shimmerLoader && <ShimmerCard />}
      {isModalOpen && selectedMeme && (
        <Modal onClose={OnModalClose}>
          <div>{selectedMeme.title}</div>
        </Modal>
      )}
    </div>
  );
};
