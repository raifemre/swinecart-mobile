import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { StyleSheet } from 'react-native';
import Ratings from './Ratings';

@inject('DashboardStore')
@observer
class Reviews extends Component {

  render() {
    const {
      DashboardStore
    } = this.props

    return (
      <React.Fragment>
        <Ratings />
      </React.Fragment>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  }
});

export default Reviews;