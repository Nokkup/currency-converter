import React from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import Navigation from "./components/Navigation/Navigation";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navigation />
            <AppRouter />
        </>
    );
};

export default App;
