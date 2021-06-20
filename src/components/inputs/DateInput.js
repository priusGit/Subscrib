import { TouchableWithoutFeedback, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, { useState } from "react";
import TextInput from "./TextInput";
import moment from "moment";

const DateInput = ({ value, onValueChange, ...restProps }) => {
  const [isPickerOpened, setIsPickerOpened] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsPickerOpened(true)}>
        <View>
          <TextInput
            editable={false}
            value={moment(value).format("DD.MM.YYYY")}
            {...restProps}
          />
        </View>
      </TouchableWithoutFeedback>
      {isPickerOpened && (
        <DateTimePickerModal
          testID="dateTimePicker"
          value={value}
          timeZoneOffsetInMinutes={0}
          mode="date"
          display="default"
          is24Hour
          isVisible={isPickerOpened}
          isDarkModeEnabled={false}
          onConfirm={(date) => {
            setIsPickerOpened(false);
            onValueChange && onValueChange(date);
          }}
          onCancel={() => setIsPickerOpened(false)}
        />
      )}
    </>
  );
};

export default DateInput;
