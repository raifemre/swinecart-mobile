import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { findIndex } from 'lodash';
import { View } from 'react-native';

import Router from './Router';

import TextWrapper from '../TextWrapper';

const styles = {
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    width: '100%',
  },
};

export default class Wizard extends Component {

  state = {
    currentStepIndex: 0,
  };

  currentStep = () => {
    const { currentStepIndex } = this.state;
    const { steps } = this.props;
    return steps[currentStepIndex];
  }

  onPressNext = () => {
    const { currentStepIndex } = this.state;
    const { form, onSubmitForm } = this.props;

    if (form.validateStep(currentStepIndex)) {
      if (this.onLastStep()) {
        onSubmitForm();
      }
      else {
        const currentStepIndex = this.state.currentStepIndex + 1;
        const { routeName } = this.props.steps[currentStepIndex];
        this.navigator.dispatch(
          NavigationActions.navigate({
            type: 'Navigation/NAVIGATE',
            routeName,
          }),
        );
      }
    }    
  }

  onPressBack = () => {
    const currentStepIndex = this.state.currentStepIndex - 1;
    const { routeName } = this.props.steps[currentStepIndex];
    this.navigator.dispatch(
      NavigationActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName,
      })
    );
  }

  onHandleNavChange = routeName => {
    const currentStepIndex = findIndex(this.props.steps, step => step.routeName === routeName);
    this.setState({ currentStepIndex });
  }

  onHandleNavRef = navigator => {
    this.navigator = navigator;
  }

  onLastStep = () => {
    const { steps } = this.props;
    const { currentStepIndex } = this.state;
    return (currentStepIndex + 1 === steps.length);
  }

  onFirstStep = () => {
    const { currentStepIndex } = this.state;
    return currentStepIndex === 0;
  }

  render() {
    const { steps } = this.props;

    return (
      <View style={styles.container}>
        <Router
          handleNavChange={this.onHandleNavChange}
          handleNavRef={this.onHandleNavRef}
          steps={steps}
        />
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          {
            !this.onFirstStep() && 
            <Button 
              full
              onPress={this.onPressBack} 
              style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
              <TextWrapper text='Back' size={16} color='#000000' />
            </Button>
          }
          <Button
            full
            onPress={this.onPressNext}
            style={{ flex: 1, backgroundColor: '#00695C' }}>
            <TextWrapper
              text={this.onLastStep() ? 'Add Product' : 'Next'}
              size={16}
              color='#f7f7f7'
              style={{ alignSelf: 'center', }}
            />
          </Button>
        </View>
      </View>
    );
  }
}