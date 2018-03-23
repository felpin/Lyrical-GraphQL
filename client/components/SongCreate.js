import React, { PureComponent } from 'react';

class SongCreate extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  render() {
    return (
      <div>
        <h3>Create a new song</h3>
        <form>
          <label>Song title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default SongCreate;
