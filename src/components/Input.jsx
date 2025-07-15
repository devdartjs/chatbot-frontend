import { useState } from "react";

function Input() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText, e.target.value);
  };

  function sendMessage() {
    console.log(inputText);
  }

  return (
    <div className="mt-4 flex items-center gap-2 p-4 bg-white rounded-2xl shadow-md w-full max-w-md">
      <input
        type="text"
        placeholder="Send Your Message Here"
        size={30}
        onChange={handleInputChange}
        className="flex-1 px-4 py-2 text-sm text-slate-700 placeholder-slate-600 bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={sendMessage}
        className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
      >
        Send
      </button>
    </div>
  );
}

export default Input;
