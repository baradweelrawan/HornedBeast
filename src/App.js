
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';





import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>

      </div>
    )
  }
}

export default App


