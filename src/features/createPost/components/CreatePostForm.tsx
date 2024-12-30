import React, { useMemo, useState } from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import { useTelegram } from '../../../hooks/useTelegram';
import { createPost } from '../../../api/posts';
import { usePostsStore } from '../../../store/posts';
import { randomPlaceholder } from '../utils/randomPlaceholder';
import { Switch } from '../../../components/Switch/Switch';

const CreatePostForm: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isAnonym, setIsAnonym] = useState(false);
  const { userId, user, webApp } = useTelegram();
  const { addNewPost } = usePostsStore();
  const inputPlaceholder = useMemo(() => randomPlaceholder(), []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.length > 280) {
      webApp.showAlert('Слишком длинное сообщение. Максимум 280 символов');
      return;
    } else if (inputValue.length < 5) {
      webApp.showAlert('Слишком короткое сообщение');
      return;
    }

    const data = await createPost({
      authorId: String(userId),
      anonymous: isAnonym,
      authorAvatar: user?.photo_url || '',
      authorFirstname: user?.first_name || 'Anonym',
      authorUsername: user?.username || '',
      body: inputValue,
    });

    if (!data.ok) {
      webApp.showAlert('Ошибка при создании поста');
      console.error(data.error);
    } else {
      setInputValue('');
      addNewPost(data.result);
      webApp.showAlert('🎅 Пост успешно создан!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "18px 0 45px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <Input 
        placeholder={inputPlaceholder} 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Switch label='Анонимно' value={isAnonym} onChange={setIsAnonym} />
      <Button type="submit" style={{ width: "100%" }}>Отправить ✉️</Button>
    </form>
  );
};

export default React.memo(CreatePostForm);