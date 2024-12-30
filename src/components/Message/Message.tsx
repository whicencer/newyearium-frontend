import { deletePost } from '../../api/posts/deletePost';
import { useTelegram } from '../../hooks/useTelegram';
import { usePostsStore } from '../../store/posts/posts';
import './Message.css';

type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar: string;
  }
};

export const Message = ({ text, user, id }: MessageProps) => {
  const { userId, webApp } = useTelegram();
  const { deletePost: deletePostFromStore } = usePostsStore();
  const isCurrentUserAdmin = userId == import.meta.env.VITE_ADMIN_TELEGRAM_ID;

  const handleDeletePost = async () => {
    try {
      await deletePost(id);
      deletePostFromStore(id);
      webApp.showAlert('Post deleted successfully');
    } catch (error) {
      console.error(error);
      webApp.showAlert('An error occurred while deleting the post');
    }
  };

  return (
    <div className="Message_component">
      {
        isCurrentUserAdmin &&
        <button className="admin_delete_post" onClick={handleDeletePost}>Delete</button>
      }
      <img src={user.avatar} alt={user.name} />
      <div className="Message_content">
        <p className="Message_username">{user.name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};