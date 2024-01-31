import React, { useState } from "react";
import copy from "copy-to-clipboard";

export default function useCopyToClipboard(resetInterval = null) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(text) {
    if (typeof text === "string" || typeof text === "number") {
      copy(text.toString());
      setIsCopied(true);
    } else {
      setIsCopied(false);
      console.log(
        `Cannot copy typof ${typeof text} to clipboard, must be a string or number.`
      );
    }
  }

  return [isCopied, handleCopy];
}
