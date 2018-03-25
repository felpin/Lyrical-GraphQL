import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';

import fetchSong from '../queries/fetchSong';

class SongDetail extends PureComponent {
  render() {
    const { loading, song } = this.props.data;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } }),
})(SongDetail);
