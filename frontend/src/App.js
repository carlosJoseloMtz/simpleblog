import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

// routes that will be used!
import Home from './routes/home'
import Post from './routes/post'
import Login from './routes/login'
import CreatePost from './routes/createpost'
import Author from './routes/author'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header />
            <div className="page-wrapper">
                <Route
                    path="/"
                    component={Home}
                    exact={true} />
                <Route
                    path="/post/:id"
                    exact={true}
                    component={Post} />
                <Route
                    path="/login"
                    exact={true}
                    component={Login} />
                <Route
                    path="/posts"
                    exact={true}
                    component={CreatePost} />
                <Route
                    path="/author/:id"
                    exact={true}
                    component={Author} />
            </div>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;

