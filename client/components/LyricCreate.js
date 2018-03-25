import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';

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

    this.props
      .mutate({ variables: { content: this.state.content } })
      .then(() => this.setState({ content: '' }));
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
      id
      content
    }
  }
}
`;

export default graphql(mutation, {
  options: props => ({ variables: { songId: props.songId } }),
})(LyricCreate);
