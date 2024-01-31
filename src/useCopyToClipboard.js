import { useCallback, useEffect, useState } from "react";
import copy from "copy-to-clipboard";

export default function useCopyToClipboard(resetInterval = null) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback((text) => {
    if (typeof text === "string" || typeof text === "number") {
      copy(text.toString());
      setIsCopied(true);
    } else {
      setIsCopied(false);
      console.log(
        `Cannot copy typof ${typeof text} to clipboard, must be a string or number.`
      );
    }
  }, []);

  useEffect(() => {
    let timeOut;
    if (isCopied && resetInterval) {
      timeOut = setTimeout(() => setIsCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy];
}
