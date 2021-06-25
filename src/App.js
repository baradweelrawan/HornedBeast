
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Form from "./FormHonerd";
import HornedBeasts from "./HornedBeasts";
import SelectedBeast from "./SelectedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hornedData: HornedBeasts,
      show: false,
      modalData: {},
    }
  }
  handelShow = (data) => {
    this.setState({
      show: true,
      modalData: data,
    })
  }
  handelClose = (data) => {
    this.setState({
      show: false,
    })
  }
  render() {
    return (
      <>
        <div>
          <Header />
          <Main handelSelect={this.handelSelect} />
          <Main selectedBeast={this.handelShow} data={this.state.hornedData}/>
          <SelectedBeast handelExit={this.handelClose} showData={this.state.show} modalData={this.state.modalData} />

          <Form />
          <Footer />

        </div>

      </>
    )
  }
}

export default App


