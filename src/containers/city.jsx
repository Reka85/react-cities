import React, {Component} from "react";
import {connect} from "react-redux";
import { setActiveCity } from "../actions";
import { bindActionCreators } from "redux";

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }
  render(){
    return(
      <div className="list-group-item" onClick={this.handleClick}>
        <p>{this.props.city.name}</p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
