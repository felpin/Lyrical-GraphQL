import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { hashHistory, Link } from 'react-router';

import fetchSongs from '../queries/fetchSongs';

function createSubmitHandler(mutate) {
  return (event) => {
    event.preventDefault();

    mutate()
      .then(() => hashHistory.push('/'));
  };
}

class SongCreate extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  render() {
    return (
      <Mutation
        mutation={mutation}
        variables={{ title: this.state.title }}
        ignoreResults={true}
        refetchQueries={() => [{ query: fetchSongs }]}
      >
        {(mutate, result) => {
          return (
            <div>
              <Link to="/">Back</Link>
              <h3>Create a new song</h3>
              <form onSubmit={createSubmitHandler(mutate)}>
                <label>Song title:</label>
                <input
                  onChange={event => this.setState({ title: event.target.value })}
                  value={this.state.title}
                />
              </form>
            </div>
          );
        }}
      </Mutation>
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

export default SongCreate;
