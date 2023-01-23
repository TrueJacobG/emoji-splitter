import { useState, useEffect } from "react";
import "./App.css";
import { formatWords } from "./lib.js";

function App() {
  const [emoji, setEmoji] = useState("0");
  const [words, setWords] = useState("");
  const [result, setResult] = useState("");
  const [clip, setClip] = useState("Copy Text");

  const addToClipboard = () => {
    navigator.clipboard.writeText(result);
    setClip("Copied");
    setTimeout(() => {
      setClip("Copy Text");
    }, 1000);
  };

  useEffect(() => {
    let converted = formatWords(words, emoji);
    setResult(converted);
  }, [emoji, words]);

  return (
    <div className="App">
      <div>
        <h1>Emoji Splitter</h1>
      </div>
      <div className="emoji-section">
        <select name="emoji" id="emoji-select" onChange={(e) => setEmoji(e.target.value)}>
          <option value="0">🥺</option>
          <option value="1">❤️</option>
          <option value="2">🥰</option>
          <option value="3">🫣</option>
          <option value="4">😅</option>
          <option value="5">🤷🏻‍♀️</option>
          <option value="6">👀</option>
          <option value="7">😡</option>
          <option value="8">👉🏼</option>
          <option value="9">👈🏼</option>
        </select>
      </div>
      <div>
        <textarea
          name="words"
          id="words-area"
          cols="30"
          rows="10"
          placeholder="Select emoji & type something"
          onChange={(e) => setWords(e.target.value)}
        ></textarea>
      </div>
      <div className="clipboard">
        <button id="clipboard-button" onClick={addToClipboard}>
          {clip}
        </button>
      </div>
      <div className="result-section">
        {result ? <p id="result">{result}</p> : <p id="placeholder-result">Splitted text will be displayed here</p>}
      </div>
    </div>
  );
}

export default App;
