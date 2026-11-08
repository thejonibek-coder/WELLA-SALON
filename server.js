import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/booking", async (req, res) => {
  try {
    const { name, phone, service, date, time, notes } = req.body;

    const message = `
🌸 <b>YANGI YOZILISH — WELLO SALON</b>

👤 <b>Ism:</b> ${name}
📞 <b>Telefon:</b> ${phone}
💇 <b>Xizmat:</b> ${service}
📅 <b>Sana:</b> ${date}
🕐 <b>Vaqt:</b> ${time}
📝 <b>Izoh:</b> ${notes || "Yo'q"}
`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    const data = await telegramResponse.json();

    if (!data.ok) {
      throw new Error(data.description);
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Telegram xatosi:", error.message);
    res.status(500).json({
      success: false,
      message: "Xabar yuborishda xatolik yuz berdi",
    });
  }
});

app.listen(3001, () => {
  console.log("Server ishlayapti: http://localhost:3001");
});