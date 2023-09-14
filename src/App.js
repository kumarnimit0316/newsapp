import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <div>
          <Router>
            <NavBar />
            <LoadingBar
              height={3}
              color="#f11946"
              progress={this.state.progress}
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="general"
                    country="in"
                    pagesize={this.pageSize}
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="business"
                    country="in"
                    pagesize={this.pageSize}
                    category="business"
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="entertainment"
                    country="in"
                    pagesize={this.pageSize}
                    category="entertainment"
                  />
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="general"
                    country="in"
                    pagesize={this.pageSize}
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="health"
                    country="in"
                    pagesize={this.pageSize}
                    category="health"
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="science"
                    country="in"
                    pagesize={this.pageSize}
                    category="science"
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="sports"
                    country="in"
                    pagesize={this.pageSize}
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="technology"
                    country="in"
                    pagesize={this.pageSize}
                    category="technology"
                  />
                }
              />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
