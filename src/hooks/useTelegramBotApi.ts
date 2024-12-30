import { TelegramApi } from "../services/TelegramApi";

export const useTelegramBotApi = () => {
  const telegramApi = new TelegramApi();

  const checkUserSub = async (userId: number) => telegramApi.checkUserSub(userId);

  return { checkUserSub };
};