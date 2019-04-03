import React from 'react';
import { observer } from 'mobx-react';
import StarRating from 'react-native-star-rating';

import TextWrapper from '../../../shared/TextWrapper';
import { View } from 'native-base';

function RatingRow({ title, data }) {
  return (
    <React.Fragment>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ alignSelf: 'flex-start', flex: 1 }}>
          <TextWrapper
            color='#ffffff'
            text={title}
            font='OpenSans-Bold'
            size={12}
          />
        </View>
        <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={data}
            fullStarColor='#F7CA18'
            emptyStar={'star-border'}
            fullStar={'star'}
            halfStar={'star-half'}
            iconSet={'MaterialIcons'}
            starSize={18}
          />
          {data && <TextWrapper
            color='#ffffff'
            text={` (${data})`}
            font='OpenSans-Bold'
            size={12}
          /> }
        </View>
      </View>
    </React.Fragment>
  )
}

export default observer(RatingRow);