import React from "react";
import "./App.css";
import {
    Route,
    BrowserRouter as Router,
    Routes,
    Navigate,
} from "react-router-dom";
import New from "./Pages/New";
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<New />} />
                    <Route path="abc" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
