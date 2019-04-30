import React from 'react';
import { View } from 'native-base';
import StarRating from 'react-native-star-rating';
import { observer } from 'mobx-react';

import TextWrapper from '../../../shared/TextWrapper';


function Rating({ form, field, placeholder }) {

  const onPressStar = value => {
    form.setValue(field, value);
  }

  return (
    <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TextWrapper
          text={placeholder}
          font='OpenSans-Bold'
          color='#000000'
          size={16}
        />
      </View>
      <View style={{ flex: 1 }}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={form.data[field]}
          fullStarColor='#F7CA18'
          emptyStar={'star-border'}
          fullStar={'star'}
          halfStar={'star-half'}
          iconSet={'MaterialIcons'}
          selectedStar={onPressStar}
          starSize={36}
        />
      </View>
    </View>
  );

}

export default observer(Rating);