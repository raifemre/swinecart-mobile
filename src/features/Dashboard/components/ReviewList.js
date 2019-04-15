import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';

import Review from './Review';

@inject('DashboardStore')
@observer
class ReviewList extends Component {

  state = {
    refreshing: false
  }

  renderItem = ({ item }) => {
    return <Review review={item} />;
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
      await this.props.DashboardStore.getReviews();
      this.setState({ refreshing: false });
    });
  };

  onEndReached = async () => {
    await this.props.DashboardStore.getMoreReviews();
  }

  render() {

    return (
      <FlatList
        data={this.props.DashboardStore.reviews}
        renderItem={this.renderItem}
        keyExtractor={item => `${item.id}`}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.9}
        initialNumToRender={8}
      />
    );
  }
}


export default ReviewList;