import React from "react";

import useCopyToClipboard from "./useCopyToClipboard";

function App({ code }) {
  const [isCopied, handleCopy] = useCopyToClipboard(3000);

  return (
    <button className="App" onClick={() => handleCopy(code)}>
      {isCopied ? "Copied" : "Copy"}
    </button>
  );
}

export default App;
