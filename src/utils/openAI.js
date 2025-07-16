const openAiRequest = async (message) => {
  try {
    if (!message || typeof message !== "string") {
      throw new Error("Invalid message format");
    }

    const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch response from OpenAI");
    }

    const data = await response.json();
    console.log("OpenAI Response:", data);

    if (!data || !data.reply) {
      throw new Error("Invalid response format from OpenAI");
    }

    return data.reply || "No response from OpenAI";
  } catch (error) {
    console.error("Error in AI Request:", error);
    throw error;
  }
};

export default openAiRequest;
