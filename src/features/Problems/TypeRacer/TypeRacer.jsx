import { useState, useRef, useMemo } from "react";
import classnames from "classnames";

import useTimer from "../../../hooks/useTimer";

export const CHAR_STATUSES = {
  UNTYPED: "untyped",
  CORRECT: "correct",
  INCORRECT: "incorrect",
};

export const PARAGRAPH =
  "It was Defence Against the Dark Arts that Harry was keen to get to; after his conversation with Wood, he wanted to get started on his Anti-Dementor lessons as soon as possible.";

/**
 * we have an initial paragraph
 * as user types, we want to check if
 * current keystroke matches with the current paragraph character
 *
 * on the first keystroke
 * if matches
 * then set color to green
 * else (mistakeFound = true)
 * set color to red
 *
 * next keystrokes
 * if mistakeFound is already present
 * then set to red
 * else
 * matching conditions
 *
 * on start
 * - set a timer (30s to 0s)
 *
 * finish??
 * - if all the chars are typed out
 * or
 * - if timer goes to 0
 *
 * stats
 * - Words Per Minutes
 * - Accuracy
 *
 * - A button to retry
 *
 * - We build as a basic UI
 * - Add functionality
 * - Timer
 * - Stats/Results
 * - Caret
 */

/**
 * Hello World
 * [
 *    // untyped, correct, or incorrect
 *   { char: 'h', status: 'untyped' }
 * ]
 *
 * Hell => input
 */

const initialCharacters = PARAGRAPH.split("").map((char) => {
  return {
    char,
    status: CHAR_STATUSES.UNTYPED,
  };
});

const INITIAL_TIME = 30;

const TypeRacer = () => {
  const [characters, setCharacters] = useState(initialCharacters);
  const [inputCharacters, setInputCharacters] = useState("");
  // idle | typing | finished
  const [appState, setAppState] = useState("idle");
  const inputRef = useRef();
  const { timeLeft, startTimer, resetTimer } = useTimer({
    initialTime: INITIAL_TIME,
    onFinish: () => setAppState("finished"),
  });
  const [correctlyTypedChars, setCorrectlyTypedChars] = useState(0);
  const [totalTypedChars, setTotalTypedChars] = useState(0);

  const handleInputChange = (e) => {
    if (appState === "finished") {
      return;
    }

    if (appState === "idle") {
      // start the timer
      startTimer();
      setAppState("typing");
    }

    const value = e.target.value;

    /**
     * Hello World
     *
     * Hell => value.length => 4 | inputCharacters.length => 4
     * Hello oorld => 11 => totalTypedCharacters = 11
     * Hello => value.length => 6
     *
     * value.length - inputCharacters.length
     * 6 - 11
     * -5
     */

    const delta = value.length - inputCharacters.length;

    if (delta > 0) {
      setTotalTypedChars((p) => p + delta);
    }

    let isMistakeFound = false;
    let correctChars = 0;

    const updatedCharacters = characters.map((ch, i) => {
      let status = CHAR_STATUSES.UNTYPED;
      // Hello World
      // Hell
      // 0123 4-n

      if (i < value.length) {
        if (isMistakeFound) {
          status = CHAR_STATUSES.INCORRECT;
        } else if (value[i] === ch.char) {
          status = CHAR_STATUSES.CORRECT;
          isMistakeFound = false;
          correctChars += 1;
        } else {
          status = CHAR_STATUSES.INCORRECT;
          isMistakeFound = true;
        }
      }

      return {
        char: ch.char,
        status,
      };
    });

    setInputCharacters(value);
    setCharacters(updatedCharacters);
    setCorrectlyTypedChars(correctChars);

    if (value.length === characters.length) {
      setAppState("finished");
    }
  };

  const setupInputFocus = () => {
    inputRef.current?.focus();
  };

  const reset = () => {
    setAppState("idle");
    setTotalTypedChars(0);
    setCorrectlyTypedChars(0);
    setCharacters(initialCharacters);
    setInputCharacters("");
    resetTimer();
  };

  const stats = useMemo(() => {
    if (appState === "finished") {
      // do calculation
      const accuracy =
        totalTypedChars > 0
          ? ((correctlyTypedChars / totalTypedChars) * 100).toFixed(1)
          : "0.0";

      // 30 - 20 => 10
      // 30 - 0 => 30
      const elpasedSeconds = INITIAL_TIME - timeLeft;
      const minutes = elpasedSeconds > 0 ? elpasedSeconds / 60 : 0;

      // a word would 5 chars
      const words = correctlyTypedChars / 5;
      const wpm = Math.floor(words / minutes);

      return {
        accuracy,
        wpm,
      };
    }

    return {
      wpm: 0,
      accuracy: 0,
    };
  }, [appState]);

  return (
    <div className="container" onClick={setupInputFocus}>
      <div className="timer">{timeLeft}</div>
      <div className="paragraph">
        {characters.map((ch, i) => {
          const isCaret = inputCharacters.length === i;

          return (
            <span
              key={`${i}-${ch.char}`}
              className={classnames("char", isCaret && "caret", ch.status)}
            >
              {ch.char === " " ? <>&nbsp;</> : ch.char}
            </span>
          );
        })}
      </div>
      <input
        ref={inputRef}
        value={inputCharacters}
        onChange={handleInputChange}
        className="hidden-input"
      />
      {appState === "finished" ? (
        <div className="results">
          <p>Words per minute: {stats.wpm}</p>
          <p>Accuracy: {stats.accuracy}</p>
          <button onClick={reset}>Retry</button>
        </div>
      ) : null}
    </div>
  );
};

export default TypeRacer;
