import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import fetchSong from '../queries/fetchSong';

class SongDetail extends PureComponent {
  render() {
    const { loading, song } = this.props.data;

    if (loading) {
      return <div>Loading...</div>;
    }

    const { id, title, lyrics } = song;

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{title}</h3>
        <LyricList lyrics={lyrics} />
        <LyricCreate songId={id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } }),
})(SongDetail);
