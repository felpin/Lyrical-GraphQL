import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';

class SongList extends PureComponent {
  render() {
    const { data } = this.props;
    const { loading, songs } = data;

    if (loading) {
      return <div>Loading...</div>;
    }

    return loading ?
      <div>Loading...</div>
      : <div>I'll soon render {songs.length} songs</div>;
  }
}

const query = gql`
{
  songs {
    title
  }
}
`;

export default graphql(query)(SongList);
