function ChatMessage(props) {
  const { message, sender } = props;
  const isUser = sender === "user";

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`mt-4 flex ${isUser ? "justify-end" : "justify-start"} w-full`}
    >
      <div
        className={`max-w-[70%] flex flex-col items-${
          isUser ? "end" : "start"
        } gap-1`}
      >
        <div
          className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : ""}`}
        >
          <img
            src={isUser ? "/user.svg" : "/bot.svg"}
            alt={isUser ? "user-icon" : "bot-icon"}
            className={
              isUser
                ? "w-10 h-10 rounded-full shadow-md mr-8"
                : "w-10 h-10 rounded-full shadow-md"
            }
          />
          <p
            className={`p-3 rounded-2xl text-sm shadow-md leading-relaxed ${
              isUser
                ? "bg-blue-600 text-white rounded-br-none"
                : "bg-gray-200 text-gray-900 rounded-bl-none"
            }`}
          >
            {message}
          </p>
        </div>
        <span
          className={
            isUser ? "text-xs text-gray-100 mr-9" : "text-xs text-gray-100 ml-2"
          }
        >
          {time}
        </span>
      </div>
    </div>
  );
}

export default ChatMessage;
