import "./Read.css";
import { useCallback, useEffect } from "react";

function ReadButton({ wordToSpell }) {
  const word = new SpeechSynthesisUtterance();
  const speechHandler = (word) => {
    word.text = wordToSpell;
    window.speechSynthesis.speak(word);
  };

  const handleKeysPress = useCallback((e) => {
    if (e.altKey && e.key === "r") {
      document.getElementById("read-btn").click();
    }
  }, []);

  useEffect(() => {
    // attach even listener
    document.addEventListener("keydown", handleKeysPress);

    // remove the even listener
    return () => {
      document.removeEventListener("keydown", handleKeysPress);
    };
  }, [handleKeysPress]);

  return (
    <div className="readButton">
      <button id="read-btn" onClick={() => speechHandler(word)}>
        <u>R</u>ead{" "}
        <span role="img" aria-label="speaker">
          🔊
        </span>
      </button>
    </div>
  );
}

export default ReadButton;
