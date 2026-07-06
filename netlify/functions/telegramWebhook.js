exports.handler = async (event) => {

  const body = JSON.parse(event.body || "{}");

  if (!body.callback_query) {
    return { statusCode: 200, body: "ok" };
  }

  const data = body.callback_query.data;
  const chatId = body.callback_query.message.chat.id;

  let text = "";

  if (data.startsWith("yes")) {
    text = "✔ APPROVED";
  }

  if (data.startsWith("no")) {
    text = "❌ REJECTED";
  }

  await fetch("https://api.telegram.org/bot8882234701:AAFv7xSw7V68F97Kr2H00ZJjzTLXiM0CEn8/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text
    })
  });

  return {
    statusCode: 200,
    body: "ok"
  };
};