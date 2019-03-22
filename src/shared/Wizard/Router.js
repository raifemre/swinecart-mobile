import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { last } from 'lodash';

export default class Router extends Component {

  componentWillMount() {
    this.Navigator = this.generateNavigator();
  }

  generateNavigator = () => {
    const { steps } = this.props;
    const navigationRoutes = {};
    steps.forEach(step => {
      const routeOptions = { screen: step.component };
      navigationRoutes[step.routeName] = routeOptions;
    });

    const navigationOptions = {
      header: null,
      mode: 'modal'
    };

    return createStackNavigator(navigationRoutes, { navigationOptions });
  }

  handleRef = (navigator) => {
    this.props.handleNavRef(navigator);
  }

  handleNavigationChange = (prevState, currentState) => {
    const { isTransitioning, routes } = currentState;
    if (isTransitioning) {
      const { routeName } = last(routes);
      this.props.handleNavChange(routeName);
    }
  }

  render() {
    const { Navigator } = this;
    return (
      <Navigator
        onNavigationStateChange={this.handleNavigationChange}
        ref={this.handleRef}
      />
    );
  }
}