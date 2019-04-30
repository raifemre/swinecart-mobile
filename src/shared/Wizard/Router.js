import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
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

    const defaultNavigationOptions = {
      header: null,
      mode: 'modal'
    };

    return createAppContainer(createStackNavigator(navigationRoutes, { defaultNavigationOptions }));
  }

  getRef = navigator => {
    this.props.handleNavRef(navigator);
  }

  onNavigationStateChange = (prevState, currentState) => {
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
        onNavigationStateChange={this.onNavigationStateChange}
        ref={this.getRef}
      />
    );
  }
}