import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';

class LyricCreate extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { content: '' };
    this.createOnSubmitHandler = this.createOnSubmitHandler.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  createOnSubmitHandler(mutate) {
    return (event) => {
      event.preventDefault();

      mutate().then(() => this.setState({ content: '' }));
    };
  }

  onChange(event) {
    this.setState({ content: event.target.value });
  }

  render() {
    const { songId } = this.props;

    return (
      <Mutation
        mutation={mutation}
        variables={{ songId, content: this.state.content }}
      >
        {(mutate, result) => {
          return (
            <form onSubmit={this.createOnSubmitHandler(mutate)}>
              <label>Add a lyric</label>
              <input
                value={this.state.content}
                onChange={this.onChange}
              />
            </form>
          );
        }}
      </Mutation>
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
      likes
    }
  }
}
`;

export default LyricCreate;
