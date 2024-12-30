import { ReactNode } from "react";
import Lottie from "lottie-react";
import treeAnimation from "../assets/tree.json";

type Props = {
  children: ReactNode;
}

const TelegramProvider = ({ children }: Props) => {

  if (!Telegram.WebApp.initData || !Object.keys(Telegram.WebApp.initDataUnsafe).length) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Lottie
          animationData={treeAnimation}
          style={{ width: 200, height: 200 }}
          loop
        />
        <h3>
          Please, open this app in
            <a href="https://t.me/newyearium_bot" style={{ fontWeight: "bold", fontStyle: "italic" }}> Telegram</a>
        </h3>
      </div>
    )
  }

  return (
    <div>
      {children}
    </div>
  );
}

export default TelegramProvider;