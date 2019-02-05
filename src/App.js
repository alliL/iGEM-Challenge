import React, { Component } from 'react';
import './App.css';
import Card from './Card.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filter: [false, false, false, false, false, false, false, false, false, true],
      postId: 0
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  updatePostId(e) {
    console.log(typeof(Number(e.target.value)));
    this.setState({
      postId: Number(e.target.value)
    });
  }

  handleClick(e) {
    let values = this.state.filter;
    values[e.target.firstChild.nodeValue - 1] = !values[e.target.firstChild.nodeValue - 1]
    this.setState(state => ({
      filter: values
    }));
  }

  render() {
    let data = this.state.data
    let users = data.map((user) => {
      if (this.state.filter[user.userId - 1] || this.state.postId === user.id) {
        return <Card key={user.id} user={user} />
      }
    });

    let buttons = [];
    for (let i = 1; i < 11; i++) {
      buttons.push(<button key={i} onClick={(e) => this.handleClick(e)}>{i}</button>);
    }

    let options = [];
    options.push(<option key="default" value="default">post ID</option>);
    for (let i = 0; i < this.state.data.length; i++) {
      options.push(<option key={this.state.data[i].id} value={this.state.data[i].id}>{this.state.data[i].id}</option>)
    }

    return (
      <div className="App">
        <header>
          <div className="btn-group">
          <select onChange={(e) => this.updatePostId(e)}>
            {options}
          </select>
            {buttons}
          </div>
        </header>
        {users}
      </div>
    );
  }
}

export default App;