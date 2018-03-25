import gql from 'graphql-tag';
import React, { PureComponent } from 'react';

class LyricCreate extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { content: '' };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ content: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();


  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add a lyric</label>
        <input
          value={this.state.content}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

const mutation = gql`
mutation AddLyricToSong($content: String, $songId: ID) {
  addLyricToSong(content: $content, songId: $songId) {
    id
    lyrics {
      content
    }
  }
}
`;

export default LyricCreate;
