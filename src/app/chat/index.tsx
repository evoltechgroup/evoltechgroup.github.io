"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    focw: any[];
  }
}

const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://chatwidget.fiveoak.com/embed.js";
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.focw = window.focw || [];
      window.focw.push({
        apiKey: "a745cd4e-897f-4d36-8945-11ecb6784c4b",
        popupMsg: "Hi there, have a question? Text us here.",
        avatar:
          "https://chatwidget.fiveoak.com/public/images/profile-image-1.png",
        primaryColor: "#1D1D1D",
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div></div>;
};

export default ChatBot;
