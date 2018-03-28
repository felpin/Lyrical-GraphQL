import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { Mutation, Query } from 'react-apollo';
import { Link } from 'react-router';

import fetchSongs from '../queries/fetchSongs';

function createOnSongDelete(id, mutate, refetch) {
  return function onSongDelete() {
    mutate({ variables: { id } })
      .then(() => refetch());
  }
}

function renderSongs(songs, mutate, refetch) {
  return songs.map(({ id, title }) => (
    <li key={id} className="collection-item">
      <Link to={`/songs/${id}`}>{title}</Link>
      <i
        className="material-icons right"
        onClick={createOnSongDelete(id, mutate, refetch)}
      >
        delete
      </i>
    </li>
  ));
}

const SongList = () => (
  <Mutation mutation={mutation}>
    {(mutate) => {
      return (
        <Query query={fetchSongs}>
          {(result) => {
            const { loading, data: { songs }, refetch } = result;

            if (loading) {
              return <div>Loading...</div>;
            }

            return (
              <div>
                <ul className="collection">
                  {renderSongs(songs, mutate, refetch)}
                </ul>
                <Link className="btn-floating btn-large red right" to="/songs/new">
                  <i className="material-icons">add</i>
                </Link>
              </div>
            );
          }}
        </Query>
      );
    }}
  </Mutation>
);

const mutation = gql`
mutation DeleteSong($id: ID) {
  deleteSong(id: $id) {
    id
  }
}
`;

export default SongList;
