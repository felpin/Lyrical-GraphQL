import gql from 'graphql-tag';
import React, { PureComponent } from 'react';

class SongList extends PureComponent {
  render() {
    return (
      <div>
        This will be my song list
      </div>
    );
  }
}

const query = gql`
{
  songs {
    title
  }
}
`;

export default SongList;
