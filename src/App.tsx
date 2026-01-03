import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && <MainContent />}
    </>
  );
}

export default App;
