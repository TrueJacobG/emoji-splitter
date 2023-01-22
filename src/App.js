import { useState, useEffect } from "react";
import "./App.css";
import { formatWords } from "./lib.js";

function App() {
  const [emoji, setEmoji] = useState("0");
  const [words, setWords] = useState("");
  const [result, setResult] = useState("");

  const addToClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  useEffect(() => {
    let converted = formatWords(words, emoji);
    setResult(converted);
  }, [emoji, words]);

  return (
    <div className="App">
      <div>
        <h1>Type what u want :D</h1>
        <h3>Select emoji (or select from list)</h3>
      </div>
      <div>
        <select name="emoji" id="emoji" onChange={(e) => setEmoji(e.target.value)}>
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
        <textarea name="words" id="words" cols="30" rows="10" onChange={(e) => setWords(e.target.value)}></textarea>
      </div>
      <div className="result">{result}</div>
      <div className="clipboard">
        <button onClick={addToClipboard}> Copy Text</button>
      </div>
    </div>
  );
}

export default App;
