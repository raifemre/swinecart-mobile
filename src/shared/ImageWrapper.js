import React, { Component } from 'react';
import { View } from 'native-base';
import FastImage from 'react-native-fast-image';
import { observer } from 'mobx-react';
import LoadingView from './LoadingView';

class ImageWrapper extends Component {

  state = {
    isLoaded: false
  }

  onLoad = e => {
    // console.log(e.nativeEvent.width, e.nativeEvent.height);
    this.setState({ isLoaded: true });
  }

  onError = e => {
    // console.log(e);
  }

  render () {

    const { uri, resizeMode, style } = this.props;
    // if (this.state.isLoaded) {
      return (
        <FastImage
          style={style}
          source={{
            uri: `${uri}`,
            priority: FastImage.priority.high,
          }}
          onLoad={this.onLoad}
          onError={this.onError}
          resizeMode={FastImage.resizeMode[resizeMode]}
        />
      );
    // }
    // else {
    //   return (
    //     <View style={style}>
    //       <LoadingView />
    //     </View>
    //   );
    // }
  }
}

export default observer(ImageWrapper);
