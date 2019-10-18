import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Trump from "./component/Trump";
import Hillary from "./component/Hillary";

import "./App.css";

class App extends Component {
  state = {
    switch: true
  };

  getTheTweets=()=>{
    axios
    .get("/trump")
    .then(res => {
      console.log(res.data);
      this.props.dispatch({
        type: "TrumpTweets",
        trumpTweets: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  axios
    .get("/hillary")
    .then(res => {
      //console.log(res.data);
      this.props.dispatch({
        type: "HillaryTweets",
        hillaryTweets: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }
  componentDidMount = () => {

   this.getTheTweets()

    setInterval(()=>{
      this.getTheTweets()
    },15000)
    
  };

  switchHandler = () => {
    this.setState({ switch: !this.state.switch });
    console.log(this.state.switch);
  };
  render() {
    return (
      <div className="App">
        <Container>
          <Button size="lg" variant="primary" onClick={this.switchHandler}>
            Switch
          </Button>
          <hr/>
          <div> {this.state.switch ? <Trump /> : <Hillary />}</div>
        </Container>
      </div>
    );
  }
}

let connectedApp = connect()(App);
export default connectedApp;
