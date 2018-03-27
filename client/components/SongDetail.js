import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import fetchSong from '../queries/fetchSong';

class SongDetail extends PureComponent {
  render() {
    return (
      <Query query={fetchSong} variables={{ id: this.props.params.id }}>
        {(queryResult) => {
          const { loading, data: { song } } = queryResult;

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
        }}
      </Query>
    );
  }
}

export default SongDetail;
