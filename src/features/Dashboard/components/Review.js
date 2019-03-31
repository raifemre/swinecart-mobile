import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { Card, CardItem, View, Right, Body, Grid, Row } from 'native-base';

import TextWrapper from '../../../shared/TextWrapper';
import IconButton from '../../../shared/IconButton';
import RatingRow from './RatingRow';

@observer
class Review extends Component {

  state = {
    showDetails: false
  }

  onPress = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  render() {

    const { cardStyle, cardItemFirst, cardItemLast } = styles;
    const { showDetails } = this.state;
    const { review } = this.props;
    return (
      <Card style={[cardStyle]}>
        <CardItem style={[cardItemFirst, { borderBottomLeftRadius: showDetails ? 0 : 5, borderBottomRightRadius: showDetails ? 0 : 5 }]}>
          <Body style={{ flex: 3, paddingBottom: 5,}}>
            <Grid>
              <Row style={{ alignItems: 'center' }}>
                <TextWrapper
                  font={'OpenSans-Bold'}
                  color={'#ffffff'}
                  text={review.customer_name}
                  size={15}
                />
                <TextWrapper
                  font={'OpenSans-Bold'}
                  color={'#9e9e9e'}
                  text={` (${review.customer_province})`}
                  size={12}
                />
              </Row>
              <Row>
                <TextWrapper
                  font={'OpenSans-Bold'}  
                  color={'#9e9e9e'}
                  text={`"${review.comment}"`}
                  size={13}
                  numberOfLines={5}
                />
              </Row>
              <Row>
                <TextWrapper
                  font={'OpenSans-Bold'}
                  color={'#f7f7f7'}
                  text={review.created_at}
                  size={9}
                />
              </Row>
            </Grid>
          </Body> 
          <Right>
            <IconButton
              marginLeft={0}
              marginRight={0}
              size={24}
              color='#ffffff'
              name={showDetails ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              type='MaterialIcons'
              onPress={this.onPress}
            />
          </Right>
        </CardItem>
        {
          showDetails &&
          <CardItem style={cardItemLast}>
            <Grid>
              <Row>
                <View style={{ flex: 1 }}>
                  <RatingRow title='Delivery Rating ' data={review.rating.delivery} />
                </View>
              </Row>
              <Row>
                <View style={{ flex: 1 }}>
                  <RatingRow title='Product Quality ' data={review.rating.productQuality} />
                </View>
              </Row>
              <Row>
                <View style={{ flex: 1 }}>
                  <RatingRow title='Transaction ' data={review.rating.transaction} />
                </View>
              </Row>
            </Grid>
          </CardItem>
        }
      </Card>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    borderRadius: 5,
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0,
    elevation: 1,
  },
  cardItemFirst: {
    paddingTop: 8,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#00695C'
  },
  cardItemLast: {
    paddingTop: 0,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#00695C',
  },
}); 

export default Review;