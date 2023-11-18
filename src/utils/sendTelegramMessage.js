import axios from 'axios';
import data from '../data/telegram.json';
const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
axios.defaults.baseURL = `https://api.telegram.org/bot${TOKEN}`;

export const sendTelegramMessage = async ({ name, phone, message }) => {
  const tel = phone.replaceAll(' ', '');
  const messageText = `${data.greetingsMessage}\n${name}\n[${tel}](tel:${tel})\n${message}`;
  if (!(TOKEN && CHAT_ID)) {
    throw new Error('Нема');
  }
  return await axios.post('/sendMessage', {
    chat_id: CHAT_ID,
    parse_mode: 'Markdown',
    text: messageText,
  });
};
