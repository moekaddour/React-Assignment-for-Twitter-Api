import React, { Component } from "react";
import moment from "moment"
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
class Trump extends Component {
  render() {
    return (
      <Container>
        {this.props.tweets.map(tweet => {
          return (
            <Card style={{ width: "70rem" }} key={tweet.id}>
              <Card.Body>
                <Card.Title>{tweet.user.name} </Card.Title> 
                <p className=" text-muted">@{tweet.user.screen_name}</p>
                <Card.Subtitle className="mb-2 text-muted">
                  {moment(tweet.created_at).startOf('hour').fromNow()}
                </Card.Subtitle>
                <Card.Text>{tweet.text}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  {tweet.user.location}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    );
  }
}

let connectedTrump = connect(store => {
  return { tweets: store.trumpTweets };
})(Trump);
export default connectedTrump;
