import React, { PureComponent } from 'react';

class LyricList extends PureComponent {
  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => (
      <li key={id} className="collection-item">
        {content}
      </li>
    ));
  }

  render() {
    return (
      <ul className="collection">
        Lyric List
      </ul>
    );
  }
}

export default LyricList;
