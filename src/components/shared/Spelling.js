import React, { useEffect } from "react";
import { useState, useRef, useCallback } from "react";
import "./Spelling.css";
import ReadButton from "./Read";
import PrintResponse from "./Response";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const Spelling = ({ wordList, title }) => {
  // word to spell
  const [word, setWord] = useState(wordList[0]);
  // keeping track of the number or items on the word list
  const [count, setCount] = useState(1);
  // controlling if the buttons are enabled/disabled
  const [disabled, setDisabled] = useState("");
  // spelled word/user input
  const [spelledWord, setSpelledWord] = useState("");
  // the output that's shown to the user after they attempt to spell the word
  const [response, setResponse] = useState("");
  // variable controlling if the word is shown or not (hidden as the user types)
  const [showWord, setShowWord] = useState("word-show");
  // list of all the words that the user attempted to spell
  const [listOfAllSpelled, setListOfAllSpelled] = useState("");
  // list keeping track of all the words, including the skipped words (appended
  // to the end of the original list)
  const [listWithSkipped, setListWithSkipped] = useState(wordList);
  // list of all the words that were spelled correctly
  const [listOfCorrectWords, setListOfCorrectWords] = useState("");

  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (spelledWord === "") {
      inputRef.current.focus();
    }
  }, [spelledWord]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      buttonRef.current.click();
    }
  };

  // the below done with help from
  // https://devtrium.com/posts/how-keyboard-shortcut
  // logic for key press assigned to buttons using useEffect and event listener
  const handleKeysShortcuts = useCallback((e) => {
    switch (true) {
      case e.altKey && e.key === "a":
        document.getElementById("tryAgain-btn").click();
        break;
      case e.altKey && e.key === "n":
        document.getElementById("next-btn").click();
        break;
      case e.altKey && e.key === "s":
        document.getElementById("skip-btn").click();
        break;
      case e.altKey && e.key === "e":
        document.getElementById("end-btn").click();
        break;
      case e.altKey && e.key === "t":
        document.getElementById("restart-btn").click();
        break;
      case e.altKey && e.key === "o":
        document.getElementById("score-btn").click();
        break;
      default:
        break;
    }
  }, []);

  // useEffect for key shortcuts
  useEffect(() => {
    // attach even listener
    document.addEventListener("keydown", handleKeysShortcuts);

    // remove the even listener
    return () => {
      document.removeEventListener("keydown", handleKeysShortcuts);
    };
  }, [handleKeysShortcuts]);

  // checks if the word (user input) is spelled correctly & re-sets the buttons
  function checkSpelling({ word, spelledWord }) {
    let entry;

    if (word === spelledWord.trim().toLowerCase()) {
      setResponse("Correct!");
      setDisabled("disabled");
      setShowWord("word-show");
      entry = word + " ✔️";
      setListOfCorrectWords([...listOfCorrectWords, entry]);
    } // only for the following words, the case won't be ignored
    else if (["Mr", "Mrs", "February"].includes(word) && word === spelledWord.trim()){
      setResponse("Correct!");
      setDisabled("disabled");
      setShowWord("word-show");
      entry = word + " ✔️";
      setListOfCorrectWords([...listOfCorrectWords, entry]);
    } 
    else {
      setResponse("Incorrect.");
      setDisabled("disabled");
      setShowWord("word-show");
      entry = word + " ❌";
    }
    setListOfAllSpelled([...listOfAllSpelled, entry]);
  }

  function handleNextButton() {
    setCount((prev) => prev + 1);
    inputRef.current.focus();
    if (count < listWithSkipped.length) {
      setWord(listWithSkipped[count]);
      setResponse("");
      setSpelledWord("");
      setDisabled("");
      setShowWord("word-show");
    } else {
      setWord("Well done! No more words to spell");
    }
  }

  function handleSkipButton() {
    setListWithSkipped([...listWithSkipped, word]);
    setCount((prev) => prev + 1);
    inputRef.current.focus();
    if (count < listWithSkipped.length) {
      setWord(listWithSkipped[count]);
      setResponse("");
      setSpelledWord("");
      setDisabled("");
      setShowWord("word-show");
    } else if (count === listWithSkipped.length) {
      setResponse("");
      setSpelledWord("");
      setDisabled("");
      setShowWord("word-show");
    } else {
      setWord("Well done! No more words to spell");
    }
  }

  function handleTryAgainButton() {
    setSpelledWord("");
    setResponse("");
    setDisabled("");
    setShowWord("word-show");
  }

  // logic for when the End button is clicked
  const [isEnd, setIsEnd] = useState(false);
  const handleEndButton = () => {
    setIsEnd(true);
  };

  // if End button is clicked, but no words were spelled yet
  if (isEnd && !listOfAllSpelled) {
    return (
      <div id="display-all-spelled">
        <div className="Spelling-content">
          <h2 className="Spelling-title">
            {title}
            <br />
            words spelled:
          </h2>
          <p>You have not spelled any words!</p>
        </div>
      </div>
    );
  }
  // if End button is clicked and words (any amount) were spelled
  else if (isEnd && listOfAllSpelled) {
    return (
      <div id="display-all-spelled">
        <div className="Spelling-content">
          <h2 className="Spelling-title">
            {title}
            <br />
            words spelled:
          </h2>
          <ul>
            {listOfAllSpelled.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  function handleScoreContent() {
    if (listOfCorrectWords.length > 0) {
      return (
        <>
          <ul className="list-score">
            {listOfCorrectWords.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      );
    } else {
      return <p>You haven't scored yet!</p>;
    }
  }

  const handleRestartButton = () => {
    setWord(wordList[0]);
    setCount(1);
    setResponse("");
    setSpelledWord("");
    setDisabled("");
    setShowWord("word-show");
    setListOfAllSpelled("");
    setListWithSkipped(wordList);
  };

  // content displayed as long as the End button has not been clicked yet
  return (
    <div className="Spelling-main">
      <div className="Spelling-content">
        <div className="info-popup">{/* <InstructionPopup /> */}</div>
        <h2 className="Spelling-title">
          {title}
          <br /> common exception words
        </h2>
        <span className={showWord}>
          {/* Word to be spelled e.g.*/}
          {word}
        </span>
        <p className="Spelling-text">
          The word will be hidden as you type, but don't worry, you can still
          hear it, if you need to.
        </p>
        <ReadButton wordToSpell={word} />
        <br />
        <input
          type="text"
          placeholder="Your turn to spell"
          className="Spelling-input"
          value={spelledWord}
          // after the check button is clicked, disable the field to stop
          // user from correcting their mistake after they submitted their response
          disabled={disabled}
          onChange={(e) => {
            setSpelledWord(e.target.value);
            setShowWord("word-hide");
          }}
          ref={inputRef}
          onKeyPress={handleKeyPress}
        />
        <br />
        <br />
        <button
          className="Spelling-button"
          ref={buttonRef}
          disabled={!spelledWord}
          // when the button is clicked, check spelling and disable the
          // check button to avoid accidental double submission to listOfSpelled
          onClick={(e) => {
            checkSpelling({ word, spelledWord });
            e.currentTarget.disabled = true;
          }}
        >
          Check
        </button>

        <div id="response">
          <PrintResponse response={response} />
        </div>
        <div className="again-next-skip-end">
          <button
            id="tryAgain-btn"
            className="Spelling-button"
            disabled={(response === "Correct!" || !response) && "disabled"}
            onClick={() => handleTryAgainButton()}
          >
            Try <u>A</u>gain
          </button>
          <button
            id="next-btn"
            className="Spelling-button"
            disabled={(response === "Incorrect." || !response) && "disabled"}
            onClick={() => handleNextButton()}
          >
            <u>N</u>ext word
          </button>
        </div>
        <div className="again-next-skip-end">
          {/* button will be disabled if the answer is correct to avoid accidental skip instead of going
          to Next word*/}
          <button
            id="skip-btn"
            className="Spelling-button"
            disabled={response === "Correct!" && "disabled"}
            onClick={() => handleSkipButton()}
          >
            <u>S</u>kip
          </button>
          <button
            id="end-btn"
            className="Spelling-button"
            onClick={() => handleEndButton()}
          >
            <u>E</u>nd
          </button>

          <Popup
            trigger={
              <button id="score-btn" className="Spelling-button">
                Sc<u>o</u>re
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <div className="content">
                  <div>
                    <h2>Words Spelled Correctly</h2>
                    <br />
                    <div>{handleScoreContent()}</div>
                  </div>
                </div>
                {/* <div>
              <button onClick={() => close()}>Close</button>
            </div> */}
              </div>
            )}
          </Popup>

          <button
            id="restart-btn"
            className="Spelling-button"
            onClick={() => handleRestartButton()}
          >
            Restar<u>t</u>
          </button>
        </div>
      </div>
    </div>
  );
};
