import "./App.css";
import ChatMessage from "./components/ChatMessage.jsx";
import Input from "./components/Input.jsx";

function App() {
  const chatMessage = [
    {
      message: "Hello, this is a chatbot",
      sender: "robot",
      id: 1,
    },
    {
      message: "Hi! What day is today",
      sender: "user",
      id: 2,
    },
    {
      message: "Today is september 27",
      sender: "robot",
      id: 3,
    },
    {
      message: "Thank you",
      sender: "user",
      id: 4,
    },
    {
      message: "No worries",
      sender: "robot",
      id: 5,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-slate-700 rounded-2xl shadow-lg">
        <div className="flex flex-col gap-">
          {chatMessage.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.message}
              sender={message.sender}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
