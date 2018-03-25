import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';

import fetchSong from '../queries/fetchSong';

class SongDetail extends PureComponent {
  render() {
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } }),
})(SongDetail);
