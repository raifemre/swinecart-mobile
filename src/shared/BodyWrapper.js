import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Title } from 'native-base';

function BodyWrapper({ title }) {

  const { bodyStyle, titleStyle } = styles;

  return (
    <Body style={bodyStyle}>
      <Title style={titleStyle}>
        {title}
      </Title>
    </Body>
  )
}

const styles = StyleSheet.create({
  bodyStyle: { flex: 4, alignItems: 'center' },
  titleStyle: { fontFamily: 'Rubik-Bold', color: '#ffffff', letterSpacing: 1 }
});

export default BodyWrapper;