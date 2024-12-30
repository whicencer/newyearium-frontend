export class TelegramApi {
  private readonly baseUrl: string = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_API}`;

  async checkUserSub(userId: number) {
    try {
      const res = await fetch(`${this.baseUrl}/getChatMember`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
          user_id: userId
        })
      });
      
      const result = await res.json();
  
      if (!result.ok) {
        console.error('Telegram API error:', result.description);
        return false;
      }
  
      const { status } = result.result;
      const allowedStatuses = ['member', 'administrator', 'creator'];
  
      return allowedStatuses.includes(status);
    } catch (error) {
      console.error('Telegram API error:', error);
      return false;
    }
  }
}