import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  const [existingUser, setExistingUser] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("userName");
    setExistingUser(user);
  }, [existingUser]);
  return (
    <div className='App'>{existingUser ? <HomePage /> : <LandingPage />}</div>
  );
}

export default App;
