import { useEffect } from "react";
import { usePostsStore } from "../../../../store/posts/posts";
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
          id={post._id}
          text={post.body}
          user={{
            name: post.anonymous ? "Anonym" : post.authorFirstname,
            avatar: post.anonymous ? "https://ui-avatars.com/api/?name=Anonym" : post.authorAvatar,
            userId: post.authorId,
            username: post.authorUsername
          }}
        />
      ))}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        Up
      </button>
    </div>
  );
};