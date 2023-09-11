import { useState, useEffect } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   darkModeDisplay();
  // }, [darkMode])

  return (
    <div className={`page ${darkMode ? `dark-mode` : 'light-mode'}`}>
      <button className='dark-light-mode-button' onClick={() => setDarkMode(!darkMode)}>Change Mode</button>
    </div>
  )
}
