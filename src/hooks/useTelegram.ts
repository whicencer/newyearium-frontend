export const useTelegram = () => {
  const webApp = Telegram.WebApp;

  return {
    userId: webApp.initDataUnsafe.user?.id,
    user: webApp.initDataUnsafe.user,
    webApp
  }
};