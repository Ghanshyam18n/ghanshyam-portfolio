import React, { createContext, useContext, useState } from "react";

const CursorContext = createContext({
  position: { x: 0, y: 0 },
  isTouchingLink: false,
  setIsTouchingLink: () => {},
});

// Kept as a lightweight compatibility provider because several existing
// components use the hook. The visible mouse-following circle is disabled.
const CursorFollower = ({ children }) => {
  const [isTouchingLink, setIsTouchingLink] = useState(false);

  return (
    <CursorContext.Provider
      value={{
        position: { x: 0, y: 0 },
        isTouchingLink,
        setIsTouchingLink,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorFollower;

export const useCursor = () => useContext(CursorContext);
