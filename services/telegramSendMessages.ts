import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface TelegramMessageData {
    name: string;
    number: string;
    email: string;
    message: string;
}

export const sendTelegramMessage = async (data: TelegramMessageData) => {
    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        console.error('Telegram bot token or chat ID is not set.');
        toast.error('Failed to send message: Configuration error.');
        return;
    }

    const text = `
    Ви маєте нове звернення від
        Name: ${data.name}
        Number: ${data.number}
        Email: ${data.email}
        Message: ${data.message}
    `;

    try {
        await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: text,
            }
        );
        toast.success('Message sent successfully!');
    } catch (error) {
        toast.error('Failed to send message.');
    }
};
