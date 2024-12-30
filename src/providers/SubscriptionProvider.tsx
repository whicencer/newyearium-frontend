import { ReactNode, useEffect, useState } from "react";
import { useTelegramBotApi } from "../hooks/useTelegramBotApi";
import { useTelegram } from "../hooks/useTelegram";
import Lottie from "lottie-react";
import animationData from "../assets/tree.json";

type Props = {
  children: ReactNode;
}

const SubscriptionProvider = ({ children }: Props) => {
  const { userId = 0, webApp } = useTelegram();
  const { checkUserSub } = useTelegramBotApi();
  const [isUserSubscribed, setIsUserSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    checkUserSub(userId)
      .then((res) => {
        setIsUserSubscribed(res);
        setIsLoading(false);
      });
  }, [checkUserSub, userId]);

  useEffect(() => {    
    if (!isUserSubscribed && !isLoading) {
      webApp.MainButton.setText("Check subscription");
      webApp.MainButton.show();

      webApp.MainButton.onClick(async () => {
        const isSubscribed = await checkUserSub(userId);

        if (!isSubscribed) {
          webApp.showAlert("Вы не подписались на канал 😕");
        } else {
          webApp.showAlert("Вы подписались на канал 🎉");
          webApp.MainButton.hide();
        }

        setIsUserSubscribed(isSubscribed);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserSubscribed, checkUserSub, userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isUserSubscribed) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", textAlign: "center",
        width: "100%",
        height: "98vh",
        gap: 20,
      }}>
        <Lottie
          animationData={animationData}
          style={{ width: 200, height: 200 }}
          loop
        />
        <span style={{ maxWidth: 300 }}>Для использования приложения, подпишитесь на
          <a href="https://t.me/+kYMS7PgDkXVkNDJi"> канал</a>
        </span>
      </div>
    );
  }

  return (
    <div>
      {children}
    </div>
  );
}

export default SubscriptionProvider;