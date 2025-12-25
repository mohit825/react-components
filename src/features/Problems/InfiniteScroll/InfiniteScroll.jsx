import { useEffect, useState } from "react";

const LIMIT_POSTS = 10;

export const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [skipPosts, setSkipPosts] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/posts?limit=${LIMIT_POSTS}&skip=${
          skipPosts * LIMIT_POSTS
        }`
      );
      const data = await res.json();
      setPosts(data.posts ?? {});
      setSkipPosts((prev) => prev + 1);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.screenY >= document.body.scrollHeight - 1) {
      fetchPosts();
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    fetchPosts();

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading Posts</div>
      ) : (
        posts?.map((post, id) => {
          return (
            <div className="p-3 bg-slate-200 m-4">
              <p key={id}>{post.title}</p>
              <span>{post.body}</span>
            </div>
          );
        })
      )}
    </div>
  );
};
