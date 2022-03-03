import React, { Component } from 'react';
export default class ComponentOld extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    console.log("constructor");
    super(props);
    this.state={
      text:"11"
    }
  }

//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps");
//   }

//   static getDerivedStateFromError(error) {
//     console.log("getDerivedStateFromProps");

//     return {  }
//   }

//   static getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("getSnapshotBeforeUpdate");

//  return 
//   }

  // componentDidCatch(error, errorInfo) {
  //   console.log("componentDidCatch");

  // }

  // UNSAFE_componentWillMount() {
  //   console.log("UNSAFE_componentWillMount");

  // }

  // componentDidMount() {
  //   console.log("componentDidMount");

  // }

  // // shouldComponentUpdate(nextProps, nextState) {
  // //   console.log("shouldComponentUpdate");

  // // }

  // // UNSAFE_componentWillReceiveProps(nextProps){
  // //   console.log("UNSAFE_componentWillReceiveProps");

  // // }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log("UNSAFE_componentWillUpdate");

  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("componentDidUpdate");

  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");

  // }
  render() {
    console.log("render");
    return (
      <div>
          <h1>ComponentOld-{this.state.text}</h1>
          
      </div>
    )
  }
}