import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';

function StatRow({ text, data }) {
  return (
    <Row>
      <Col>
        <TextWrapper
          color='#ffffff'
          text={text}
          font='OpenSans-SemiBold'
          size={16}
        />
      </Col>
      <Col style={[styles.container]}>
        <TextWrapper
          color='#ffffff'
          text={data}
          font='OpenSans-SemiBold'
          size={18}
        />
      </Col>
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default StatRow;