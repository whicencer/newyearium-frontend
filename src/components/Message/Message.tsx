import './Message.css';

type MessageProps = {
  text: string;
  user: {
    name: string;
    avatar: string;
  }
};

export const Message = ({ text, user }: MessageProps) => {
  return (
    <div className="Message_component">
      <img src={user.avatar} alt={user.name} />
      <div className="Message_content">
        <p className="Message_username">{user.name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};