import React from "react";
import Home from "./Home";
import Image from "./Image";
import { Route, Routes } from "react-router-dom";

const App = () => {


    return (
        <React.Fragment>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/image"} element={<Image />} />
            </Routes>
        </React.Fragment>
    );
};

export default App;
