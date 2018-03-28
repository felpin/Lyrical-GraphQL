import gql from 'graphql-tag';
import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';

function createOnLikeHandler(mutate, id, likes) {
  return function onLike() {
    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1,
        },
      },
    });
  }
}

class LyricList extends PureComponent {
  renderLyrics(mutate) {
    return this.props.lyrics.map(({ id, content, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <i
          className="material-icons right"
          onClick={createOnLikeHandler(mutate, id, likes)}
        >
          thumb_up
        </i>
        <span className="right">
          {likes}
        </span>
      </li>
    ));
  }

  render() {
    return (
      <Mutation mutation={mutation}>
        {(mutate, result) => {
          return (
            <ul className="collection">
              {this.renderLyrics(mutate)}
            </ul>
          );
        }}
      </Mutation>
    );
  }
}

const mutation = gql`
mutation LikeLyric($id: ID) {
  likeLyric(id: $id) {
    id
    likes
  }
}
`;

export default LyricList;
