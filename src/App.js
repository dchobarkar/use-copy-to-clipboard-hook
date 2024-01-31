import React from "react";

import useCopyToClipboard from "./useCopyToClipboard";
import "./App.css";

function App({ code }) {
  const [isCopied, handleCopy] = useCopyToClipboard();

  return (
    <button className="App" onClick={() => handleCopy(code)}>
      {isCopied ? "Copied" : "Copy"}
    </button>
  );
}

export default App;
