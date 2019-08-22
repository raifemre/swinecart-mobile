import React, { memo, useState } from 'react';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';
import { Button, Text } from 'react-native-ui-kitten';
import { withStyles } from 'react-native-ui-kitten/theme';

import { formatDeliveryDate, formatMarkedDate } from '../../../../utils/formatters';

import { sizes, textStyles, colors } from '../../../../constants/theme';
import Block from '../../Block';

import { 
  OrderService
} from '../../../../services';

function SendProduct(props) {

  const today = new Date();

  // State

  const [isVisible, setVisible] = useState(true);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState(today);
  const [markedDates, setMarkedDates] = useState(formatMarkedDate(today));

  const hideModal = () => {
    setVisible(false);
  };

  // Modal LifeCycle Handlers

  const onModalHide = () => {
    props.hideModal();
  };

  const onModalShow = () => {
    setCalendarVisible(true);
  };

  // Props

  const { themedStyle, data } = props;
  const { product, reservation } = data;


  // Event Handlers

  const onPressPrimaryAction = () => {

    // const data = {
    //   deliveryDate,
    //   product_id: props.data.data.id,
    //   reservation: props.data.data.reservation
    // };

  };

  const onPressClose = () => {
    hideModal();
  };

  const onDayPress = ({ dateString }) => {
    setDeliveryDate(dateString);
    setMarkedDates({ [dateString]: { selected: true } });
  };

  const primaryActionText = 'Yes, deliver it';

  return (
    <Modal
      hideModalContentWhileAnimating={true}
      coverScreen={true}
      backdropOpacity={0.60}
      useNativeDriver={true}
      isVisible={isVisible}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      onModalHide={onModalHide}
      onModalShow={onModalShow}
      style={themedStyle.modalStyle}
    >
      <Block center middle style={themedStyle.containerStyle}>
        <Block flex={1} center left style={themedStyle.headerStyle}>
          <Text style={textStyles.headline}>Deliver Product to Customer?</Text>
        </Block>
        <Block flex={1} center padding style={{ width: '100%' }}>
          <Text style={textStyles.subtitle}>Product will be delivered on or before:</Text>
          <Text style={textStyles.subtitle}>{formatDeliveryDate(deliveryDate)}</Text>
          <Block flex={1} center middle style={{ width: '100%' }}>
            {
              isCalendarVisible && <Calendar
                style={themedStyle.calendarContainerStyle}
                theme={themedStyle.calendarStyle}
                minDate={today}
                markedDates={markedDates}
                onDayPress={onDayPress}
                monthFormat={'MMMM yyyy'}
              />
            }
            {
              !isCalendarVisible && <Text style={textStyles.subtitle}>
                Loading...
            </Text>
            }
          </Block>
        </Block>
        <Block flex={1} row right style={themedStyle.footerStyle}>
          <Block flex={1} center middle>
            <Button
              size='medium'
              onPress={onPressClose}
              appearance='ghost'
              style={themedStyle.buttonStyle}
              textStyle={themedStyle.closeTextStyle}
            >
              Close
            </Button>
          </Block>
          <Block flex={1} center middle>
            <Button
              size='medium'
              onPress={onPressPrimaryAction}
              style={themedStyle.buttonStyle}
              textStyle={themedStyle.primaryActionTextStyle}
            >
              {primaryActionText}
            </Button>
          </Block>
        </Block>
      </Block>
    </Modal>
  );

}


export default withStyles(memo(SendProduct), () => ({
  modalStyle: {
    flex: 1,
    margin: sizes.margin
  },
  containerStyle: {
    backgroundColor: '#ffffff',
    maxHeight: 500,
    borderRadius: 5
  },
  buttonStyle: {
    borderWidth: 0,
  },
  messageCustomerTextStyle: {
    ...textStyles.button,
    color: '#ffffff',
  },
  closeTextStyle: {
    ...textStyles.button,
    color: colors.gray3
  },
  labelStyle: {
    ...textStyles.caption1,
    fontSize: 14,
    color: colors.gray3
  },
  headerStyle: {
    maxHeight: 39,
    padding: sizes.padding / 2,
    width: '100%',
  },
  footerStyle: {
    width: '100%',
    maxHeight: 56,
    padding: sizes.padding / 2,
  },
  calendarStyle: {
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: colors.primary,
    selectedDayTextColor: '#ffffff',
    todayTextColor: colors.primary,
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    arrowColor: colors.primary,
    monthTextColor: '#000000',
    indicatorColor: colors.primary,
    textDayFontFamily: 'OpenSans-Regular',
    textMonthFontFamily: 'OpenSans-Regular',
    textDayHeaderFontFamily: 'OpenSans-Regular',
    textDayFontWeight: 'normal',
    textMonthFontWeight: 'normal',
    textDayHeaderFontWeight: 'normal',
    textDayFontSize: 15,
    textMonthFontSize: 18,
    textDayHeaderFontSize: 14
  },
  calendarContainerStyle: {
    width: '100%',
  }
}));