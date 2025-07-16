import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import Input from "./Input.jsx";
import openAiRequest from "../utils/openAI.js";

function ChatMessages() {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello, this is a chatbot", sender: "robot", id: 1 },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleSend = (newMessage) => {
    const newMsgObj = {
      message: newMessage,
      sender: "user",
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    };

    setChatMessages((prev) => [...prev, newMsgObj]);

    openAiRequest(newMessage)
      .then((response) => {
        setChatMessages((prev) => [
          ...prev,
          {
            message: response,
            sender: "robot",
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching response from OpenAI:", error);
        setChatMessages((prev) => [
          ...prev,
          {
            message: "Sorry, I couldn't process your request.",
            sender: "robot",
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          },
        ]);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 rounded-lg shadow-lg">
      <div className="w-full max-w-md p-6 bg-slate-700 rounded-lg shadow-lg">
        <div className="flex flex-col gap-4 max-h-96 overflow-y-auto">
          {chatMessages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.message}
              sender={message.sender}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <Input onSend={handleSend} />
      </div>
    </div>
  );
}

export default ChatMessages;
