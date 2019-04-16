import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { StyleSheet, TextInput } from 'react-native';
import { View } from 'native-base';

@observer
class SearchBar extends Component {

  render() {

    const { onFocus, onBlur } = this.props;

    return (
      <View style={{ flex: 1, paddingVertical: 5, }}>
        <TextInput
          selectionColor='#000000'
          underlineColorAndroid='transparent'
          style={styles.inputStyle}
          value={''}
        // onBlur={onBlur}
        // keyboardType={keyboardType}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    paddingVertical: 0,
    paddingLeft: 10,
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  }
});

export default SearchBar;