import React from "react";
import { Route, Routes } from "react-router-dom";
import Credit from "./container/Credit";
import Main from "./container/Main";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route index path="/credit/:id" element={<Credit />} />
            </Routes>
        </div>
    );
};

export default App;
