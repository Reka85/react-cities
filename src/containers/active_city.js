import React, {Component} from "react";
import { connect } from "react-redux";

const ActiveCity = (props) => {

    return(
      <div className="active-city">
        {props.activeCity &&
          <div>
            <h3>{props.activeCity.name}</h3>
            <p>{props.activeCity.address}</p>
            <img src={`https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`} alt={`${props.activeCity.name} city photo`}/>
          </div>
        }
      </div>
    )

}

function mapStateToProps(state){
  return{
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
