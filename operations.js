require("dotenv").config();
const axios = require("axios");

const getFormData = async (req, res) => {
  const { name, tel, email, feedback } = req.body;
  const token = process.env.API_KEY;
  const url = process.env.API_URL;
  const chatId = process.env.API_ID;

  const message = `<strong>Контакти з сайту:</strong>\n<u>${name}</u>\n<i>${tel}</i>\n<i>${email}</i>\n<b>${feedback}</b>`;

  try {
    await axios.post(`${url}/bot${token}/sendMessage`, {
      chat_id: chatId,
      parse_mode: "html",
      text: message,
    });
    res.json({ message: "Дані успішно отримано на сервері!" });
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

module.exports = getFormData;
