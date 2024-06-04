import { useState, useEffect } from "react";

export const useTypingEffect = (text: string, speed = 10) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev: string) => prev + text[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
};
