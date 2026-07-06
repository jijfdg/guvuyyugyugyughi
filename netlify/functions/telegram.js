export const handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const text = `
📩 New Application
👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🌍 Country: ${data.country}
`;

    const response = await fetch(`https://api.telegram.org/bot8882234701:AAFv7xSw7V68F97Kr2H00ZJjzTLXiM0CEn8/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: 8370374700,
        text: text
      })
    });

    const result = await response.json();

    console.log("TELEGRAM RESPONSE:", result);

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };

  } catch (err) {
    console.log("ERROR:", err);

    return {
      statusCode: 500,
      body: "error"
    };
  }
};