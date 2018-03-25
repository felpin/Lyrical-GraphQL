import React, { PureComponent } from 'react';

class LyricList extends PureComponent {
  onLike() {
    // TODO: Implement function
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => (
      <li key={id} className="collection-item">
        {content}
        <i
          className="material-icons right"
          onClick={() => this.onLike(id)}
        >
          thumb_up
        </i>
      </li>
    ));
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default LyricList;
