import {Component} from 'react'

export default class Layout extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>class header</h1>
        {this.props.children}
      </div>
    );
  }
}