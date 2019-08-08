import React, { PureComponent } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { colors, textStyles, shadowStyles } from '../../../constants/theme';

import ConversationsList from './ConversationsList';
import NotificationsList from './NotificationsList';

import { EmptyListMessage } from '../../../shared/components';

import { createConversations } from '../../../utils/mockdata';

const conversations = createConversations(500);

class InboxTabView extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: 'conversations', title: 'Conversations' },
      { key: 'notifications', title: 'Notifications' },
    ],
  };

  conversationsRoute = () => <ConversationsList data={conversations} />;
  notificationsRoute = () => <NotificationsList />;

  initialLayout = {
    height: 0,
    width: Dimensions.get('window').width
  };

  getLabelText = ({ route }) => route.title;

  renderTabBar = props => (
    <TabBar
      {...props}
      useNativeDriver={true}
      getLabelText={this.getLabelText}
      labelStyle={styles.labelStyle}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabBarStyle}
      tabStyle={styles.tabStyle}
    />
  );

  renderScene = SceneMap({
    conversations: this.conversationsRoute,
    notifications: this.notificationsRoute,
  });

  renderLazyPlaceholder = () => {
    return (
      <EmptyListMessage title='Loading Items...' />
    );
  }

  onIndexChange = index => this.setState({ index });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.onIndexChange}
        initialLayout={this.initialLayout}
        lazy={true}
        lazyPreloadDistance={0}
        renderLazyPlaceholder={this.renderLazyPlaceholder}
      />
    );
  }
}

export default InboxTabView;

const styles = StyleSheet.create({
  tabStyle: {
  },
  tabBarStyle: {
    ...shadowStyles.shadow1,
    backgroundColor: colors.primary,
  },
  labelStyle: {
    ...textStyles.paragraph,
    fontSize: 15,
  },
  indicatorStyle: {
    backgroundColor: 'white',
    height: 4
  },
});

