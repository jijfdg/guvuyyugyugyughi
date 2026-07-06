exports.handler = async (event) => {

  const data = JSON.parse(event.body || "{}");

  console.log("DATA", data);

  const text =
`🆕 NEW APPLICATION

👤 ${data.firstName} ${data.lastName}
📧 ${data.email}
🌍 ${data.country}`;

  await fetch("https://api.telegram.org/bot8882234701:AAFv7xSw7V68F97Kr2H00ZJjzTLXiM0CEn8/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: 8370374700,
      text: text,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "✅ YES", callback_data: "yes" },
            { text: "❌ NO", callback_data: "no" }
          ]
        ]
      }
    })
  });

  return {
    statusCode: 200,
    body: "ok"
  };
};