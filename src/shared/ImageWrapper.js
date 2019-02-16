import React, { PureComponent } from 'react';
import FastImage from 'react-native-fast-image';

class ImageWrapper extends PureComponent {

  state = {
    height: 0,
    width: 0,
  }

  onLoad = e => {
    const {
      nativeEvent: { width, height },
    } = e
    this.setState({ width, height });
  }

  getHeight = () => {
    if (!this.state.height) return this.props.defaultHeight
    const ratio = this.state.height / this.state.width
    const height = this.props.width * ratio
    return height;
  }

  render () {

    const { uri, ...props } = this.props;
    const height = this.getHeight();

    return (
      <FastImage
        style={[{ width: props.width, height: props.height || height }, this.props.style]}
        onLoad={this.onLoad}
        source={{
          uri: uri,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.scale}
        {...props}
      />
    );
  }
}

export default ImageWrapper;
