import { useEffect } from "react";
import { usePostsStore } from "../../../../store/posts";
import { getPosts } from "../../../../api/posts";
import { Message } from "../../../../components/Message/Message";

export const Feed = () => {
  const { setPosts, posts } = usePostsStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPosts();
        setPosts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [setPosts]);

  return (
    <div>
      {posts.map((post) => (
        <Message
          key={post._id}
          text={post.body}
          user={{
            name: post.anonymous ? "Anonym" : post.authorFirstname,
            avatar: post.anonymous ? "https://ui-avatars.com/api/?name=Anonym" : post.authorAvatar
          }}
        />
      ))}
    </div>
  );
};