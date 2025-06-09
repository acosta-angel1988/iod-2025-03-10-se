// Emoji.jsx
import React, { useState } from "react";

const emojiList = ["😀", "😎", "🐱", "🚀", "🍕", "🦁", "🎉", "🐼"];

const Emoji = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);

  const handleChangeEmoji = () => {
    // Generate a new index different from the current one
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * emojiList.length);
    } while (newIndex === emojiIndex);
    setEmojiIndex(newIndex);
  };

  return (
    <div style={{ fontSize: "2rem", textAlign: "center", marginTop: "2rem" }}>
      <div>{emojiList[emojiIndex]}</div>
      <button onClick={handleChangeEmoji} style={{ marginTop: "1rem" }}>
        Switch Emoji
      </button>
    </div>
  );
};

export default Emoji;