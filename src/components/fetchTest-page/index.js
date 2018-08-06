import React, { Component } from 'react';
import Fetch from 'react-fetch';

export default class FetchTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
 

  render() {
  return (
  <Fetch url='http://192.168.1.2:8080/api/users'>
    <TestComponent/>
    </Fetch>);
  }

}

class TestComponent extends React.Component{
  render(){
    console.log(this.props)
    return <div/>
  }
}