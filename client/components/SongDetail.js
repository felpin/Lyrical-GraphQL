import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import fetchSong from '../queries/fetchSong';

class SongDetail extends PureComponent {
  render() {
    const { loading, song } = this.props.data;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } }),
})(SongDetail);
