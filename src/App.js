import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationDrawer from "./components/navigationDrawer";
import Home from "./pages/home";
import QuestionOne from "./pages/questionOne";
import QuestionTwo from "./pages/questionTwo";
import QuestionThree from "./pages/questionThree";
import QuestionFour from "./pages/questionFour";
import AppBar from "./components/header";
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
import { green, blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: green[400],
    },
  },
});

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Router>
            <AppBar />
            <NavigationDrawer />
            <div style={{ flex: 1, overflow: "auto" }}>
              <Switch>
                <Route path="/questionOne">
                  <QuestionOne />
                </Route>
                <Route path="/questionTwo">
                  <QuestionTwo />
                </Route>
                <Route path="/questionThree">
                  <QuestionThree />
                </Route>
                <Route path="/questionFour">
                  <QuestionFour />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
