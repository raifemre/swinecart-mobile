import React from 'react';
import { View, Spinner } from 'native-base';
import { observer } from 'mobx-react';


function LoadingView(props) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Spinner color='#00695C'/>
    </View>
  );

}

export default observer(LoadingView);