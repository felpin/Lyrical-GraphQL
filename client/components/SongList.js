import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSongs from '../queries/fetchSongs';

class SongList extends PureComponent {
  onSongDelete(id) {
    this.props.mutate({
      variables: { id },
      refetchQueries: [{ query: fetchSongs }],
    });
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
        <i
          className="material-icons right"
          onClick={() => this.onSongDelete(id)}
        >
          delete
        </i>
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link className="btn-floating btn-large red right" to="/songs/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
mutation DeleteSong($id: ID) {
  deleteSong(id: $id) {
    id
  }
}
`;

export default graphql(fetchSongs)(
  graphql(mutation)(SongList)
);
