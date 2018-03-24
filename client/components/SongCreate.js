import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory, Link } from 'react-router';

class SongCreate extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({ variables: { title: this.state.title } })
      .then(() => hashHistory.push('/'));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
mutation AddSong($title: String) {
  addSong(title: $title) {
    title
  }
}
`;

export default graphql(mutation)(SongCreate);
