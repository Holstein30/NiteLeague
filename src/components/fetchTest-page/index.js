import React, { Component } from 'react';

class FetchTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  // componentDidMount() {
  //   fetch('https://api.mydomain.com')
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  // }

  render() {
    return <div>Fetch Page Rendering</div>;
  }

}

export default FetchTest;