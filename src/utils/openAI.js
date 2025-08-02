const openAiRequest = async (message) => {
  try {
    if (!message || typeof message !== "string") {
      throw new Error("Invalid message format");
    }

    //for consuming AI please check the backend repository (https://github.com/devdartjs/ChatBot) for documentation
    //backend in production is located in https://app-lingering-night-7063.fly.dev/
    const response = await fetch(
      "https://app-lingering-night-7063.fly.dev/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }
    );

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
