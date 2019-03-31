import React from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Card, CardItem, Grid, Row } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import LoadingView from '../../../shared/LoadingView';
import ReviewList from './ReviewList';


function Ratings({ DashboardStore }) {

  const { container, cardStyle } = styles;

  if (DashboardStore.reviews) {
    return (
      <React.Fragment>
        <Card style={[cardStyle]}>
          <CardItem style={{ backgroundColor: '#00695C', paddingTop: 8, paddingBottom: 8, borderRadius: 5 }}>
            <Grid>
              <Row style={[container]}>
                <TextWrapper
                  color='#ffffff'
                  text='Customer Reviews'
                  font='OpenSans-Bold'
                  size={16}
                />
              </Row>
              <Row style={[container]}>
                <TextWrapper
                  color='#ffffff'
                  text={`(${DashboardStore.reviews.length})`}
                  font='OpenSans-Bold'
                  size={12}
                />
              </Row>
            </Grid>
          </CardItem>
        </Card>
        <ReviewList />
      </React.Fragment>
    )
  }
  else {
    return <LoadingView />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0,
    elevation: 0,
    flex: 1
  }
});

export default inject('DashboardStore')(observer(Ratings));