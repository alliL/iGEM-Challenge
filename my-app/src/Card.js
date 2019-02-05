import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="cardinfo">
          <section className="userid">
            {this.props.user.userId}
          </section>
          <section className="content">
            <h2>{this.props.user.title}</h2>
            <p>{this.props.user.body}</p>
          </section>
      </div>
    );
  }
}

export default Card;