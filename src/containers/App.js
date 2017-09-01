import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

import User from "../components/User"
import Year from "../components/Year"
import setYearAction from "../actions/actionYear"

import { connect } from "react-redux"

class App extends Component {
  render() {
    return (
      <div>
          <User user={this.props.user}/>
          <Year year={this.props.year} setYear={this.props.setYearFunction}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userInfo.user,
    year: state.userInfo.year
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setYearFunction: year => {
      dispatch(setYearAction(year))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
