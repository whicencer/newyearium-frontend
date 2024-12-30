import { useEffect } from "react";
import { CreatePostForm } from "./features/createPost";
import { Feed } from "./features/feed/components/Feed/Feed";
import { useTelegram } from "./hooks/useTelegram";
import { usePostsStore } from "./store/posts/posts";

function App() {
  const { webApp } = useTelegram();
  const { postsCount } = usePostsStore();

  useEffect(() => {
    webApp.expand();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>🎄 Привет, {webApp.initDataUnsafe.user?.first_name}</h3>
      <CreatePostForm />
      <p style={{ color: "darkgray", paddingBottom: 10 }}>Всего писем: {postsCount}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Feed />
      </div>
    </div>
  );
}

export default App
