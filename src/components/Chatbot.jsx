import React, { useState, useRef, useEffect } from "react";
import { portfolioData } from "./data";
import { X } from "lucide-react";

export default function Chatbot() {
  const botAvatar = "https://api.dicebear.com/9.x/lorelei/svg"; 
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm Aki, your interactive guide to Akshay's portfolio. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, typing]);

  const normalize = (text) => text.toLowerCase().replace(/[?.!]/g, "").trim();

  const addBotMessage = (text) => {
    setTyping(true);
    let index = 0;
    const newMsg = { sender: "bot", text: "" };
    setMessages((prev) => [...prev, newMsg]);

    typingTimeoutRef.current = setInterval(() => {
      index++;
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1].text = text.slice(0, index);
        return copy;
      });
      if (index >= text.length) {
        clearInterval(typingTimeoutRef.current);
        setTyping(false);
      }
    }, 20);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const lowerInput = normalize(input);
    let response = "Sorry, I didn't understand that. Try one of the suggested questions below:";

    Object.keys(portfolioData).forEach((key) => {
      const section = portfolioData[key];

      if (lowerInput.includes(key)) {
        response = getSectionResponse(key, section);
      }

      if (section.recommended?.some((q) => normalize(q).includes(lowerInput))) {
        response = getSectionResponse(key, section);
      }

      if (key === "projects") {
        const proj = section.list.find((p) => normalize(p.title).includes(lowerInput));
        if (proj) {
          response = `Project: ${proj.title}\nDescription: ${proj.description}\nTechnologies: ${proj.tags.join(", ")}\nGitHub: ${proj.github}\nLive: ${proj.live}`;
        }
      }
    });

    addBotMessage(response);
    setInput("");
    if (!isOpen) setIsOpen(true);
  };

  const getSectionResponse = (key, section) => {
    if (key === "projects") return section.text + "\nProjects: " + section.list.map((p) => p.title).join(", ");
    if (key === "skills") return section.text + "\n" + section.list.join(", ");
    if (key === "resume") return `${section.text}\n${section.link}`;
    return section.text;
  };

  const allSections = Object.keys(portfolioData);

  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col items-end">
      {/* Floating Icon */}
      {!isOpen && (
        <div className="group relative flex flex-col items-center">
          <span className="absolute bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-900 text-white text-xs rounded px-2 py-1 shadow-lg">
            Hi, I’m Aki!
          </span>
          <button
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 p-1 shadow-xl hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-300 animate-pulse"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={botAvatar}
              alt="Aki"
              className="w-full h-full rounded-full object-cover border-2 border-white shadow-md"
            />
          </button>
        </div>
      )}

      {/* Expanded Chat */}
      {isOpen && (
        <div
          className={`bg-gray-900 text-white rounded-lg shadow-2xl flex flex-col overflow-hidden animate-slide-in`}
          style={{
            width: isMobile ? "90vw" : "24rem",
            maxHeight: isMobile ? "80vh" : "75vh",
            bottom: "8px",
            right: "8px",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-2 sm:p-3">
            <span className="font-bold flex items-center gap-2 text-sm sm:text-base">
              <img
                src={botAvatar}
                alt="Aki"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white shadow-md"
              />
              Aki - Chatbot
            </span>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-4 sm:w-5 h-4 sm:h-5 text-gray-900" />
            </button>
          </div>

          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-2 sm:p-3 flex flex-col gap-2 text-xs sm:text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-1 sm:p-2 rounded break-words max-w-full ${
                  msg.sender === "user" ? "bg-gray-700 self-end text-right" : "bg-gray-800 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="p-1 sm:p-2 rounded break-words max-w-[40%] bg-gray-800 self-start flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-400"></span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Recommended Questions */}
          <div className="flex flex-wrap gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm">
            {allSections.map((key) =>
              portfolioData[key].recommended
                ?.slice(0, isMobile ? 5 : undefined) // only 5 for mobile
                .map((q, idx) => (
                  <button
                    key={idx}
                    className="bg-yellow-500 text-gray-900 px-2 py-1 rounded text-xs hover:bg-yellow-400"
                    onClick={() => setInput(q)}
                  >
                    {q}
                  </button>
                ))
            )}
          </div>

          {/* Input Box */}
          <div className="flex p-2 sm:p-3 border-t border-gray-700">
            <input
              type="text"
              className="flex-1 px-2 py-1 rounded-l bg-gray-700 text-white outline-none text-xs sm:text-sm"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-yellow-500 px-3 sm:px-4 py-1 sm:py-1 rounded-r font-bold text-gray-900 hover:bg-yellow-400 text-xs sm:text-sm"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
