import React, { Component } from 'react';
import { Row, Col } from 'native-base';
import TextWrapper from '../../../shared/TextWrapper';
import { observer } from 'mobx-react';

@observer
class DataRow extends Component {
  render() {
    const { label, value } = this.props;

    return (
      <Row>
        <Col>
          <TextWrapper size={16} text={label} color='#8E8E8E' />
        </Col>
        <Col>
          <TextWrapper size={16} text={value} color='#8E8E8E' />
        </Col>
      </Row>
    )
  }
}

export default DataRow;