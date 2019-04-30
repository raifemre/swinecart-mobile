import React from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Card, CardItem, Grid, View, Row } from 'native-base';
import StarRating from 'react-native-star-rating';

import TextWrapper from '../../../shared/TextWrapper';
import LoadingView from '../../../shared/LoadingView';
import RatingRow from './RatingRow';

function Ratings({ DashboardStore }) {

  const { container, cardStyle } = styles;

  if (DashboardStore.ratings) {
    return (
      <Card style={[cardStyle]}>
        <CardItem style={{ backgroundColor: '#00695C', paddingTop: 8, paddingBottom: 8, borderRadius: 5 }}>
          <Grid>
            <Row style={[container]}>
              <TextWrapper
                color='#ffffff'
                text='Overall Average Rating'
                font='OpenSans-Bold'
                size={13}
              />
            </Row>
            <Row style={[container]}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={DashboardStore.ratings.overall}
                fullStarColor='#F7CA18'
                emptyStar={'star-border'}
                fullStar={'star'}
                halfStar={'star-half'}
                iconSet={'MaterialIcons'}
                starSize={40}
              />
            </Row>
            <Row style={[container, { marginBottom: 15 }]}>
              <TextWrapper
                color='#ffffff'
                text={`(${DashboardStore.ratings.overall})`}
                font='OpenSans-Bold'
                size={12}
              />
            </Row>
            <Row style={[container]}>
              <RatingRow title='Delivery Rating ' data={DashboardStore.ratings.delivery} />
            </Row>
            <Row style={[container]}>
              <RatingRow title='Transaction Rating ' data={DashboardStore.ratings.transaction} />
            </Row>
            <Row style={[container]}>
              <RatingRow title='Product Quality Rating ' data={DashboardStore.ratings.productQuality} />
            </Row>
          </Grid>
        </CardItem>
      </Card>
    )
  }
  else {
    return <LoadingView />;
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