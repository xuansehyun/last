import {
  default as React,
  Component, 
  PropTypes,
} from "react";

import {
  FlatButton,
} from "material-ui";

const rowStyle = {
  flex: "0 1 auto",
  "align-self": "center",
}

export default class Stage1 extends Component {
 
//check for func 
  static propTypes = {
    onAddClicked: PropTypes.func.isRequired,
  } 
  render () {
    return (
      //align center not working right now
      <div style = {rowStyle}>
      <FlatButton
       label="Add A New Device"
       primary={true}
       onClick={this.props.onAddClicked}
      />
      </div>
    );
  }  
}