import { useState, useEffect } from "react";

export const useTypingEffect = (text: string, speed = 10) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const intervalId = setInterval(() => {
      setDisplayedText((prev: string) => {
        if (index < text.length) {
          const nextChar = text[index];
          index++;
          return prev + nextChar;
        } else {
          clearInterval(intervalId);
          return prev; 
        }
      });
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
};
