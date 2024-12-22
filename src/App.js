import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "./config/config";
import Search from "./components/Search/Search";
import Assistant from "./components/Assistant/Assistant"; 
import "./App.css"; 

function App() {
  const [showAssistant, setShowAssistant] = useState(false);
  const [query, setQuery] = useState("");

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };
  const updateAssistant = (show) => {
    setShowAssistant(show);
  };

  return (
    <>
      <Router>
      {showAssistant && <Assistant query={query} updateAssistant={updateAssistant} />}

        <NavBar />
        {/* <button
          className="toggle-assistant-btn"
          onClick={() => setShowAssistant(!showAssistant)}
        >
          {showAssistant ? "Close Assistant" : "Open Assistant"}
        </button> */}

      

        <Routes>
          {router.map((path) => (
            <Route
              exact
              key={uuidv4()}
              path={path.path}
              element={
                <News
                  key={path.key}
                  newscategory={path.category}
                  country={path.country}
                  updateQuery={updateQuery} 
                  updateAssistant={updateAssistant}
                />
              }
            />
          ))}
          <Route path="/search/:query" element={<Search  updateQuery={updateQuery} 
                  updateAssistant={updateAssistant}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
