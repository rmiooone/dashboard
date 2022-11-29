import React, { Component } from 'react';

export class Widget extends React.Component {

  state = {
    post: {}
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((reponse) => {
        return reponse.json()
      })
      .then((result) => {
        this.setState({ post: result })
      })
  }

  render() {
    return (
      <div>
        <h1>Widget 1</h1>
        {this.state.post.title}
      </div>
    );
  }

}
