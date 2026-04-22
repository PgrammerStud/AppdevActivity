import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CustomTextInput = ({
  placeholder,
  label,
  labelStyle,
  value,
  containerStyle,
  textStyle,
  onChangeText,
  secureTextEntry,
  keyboardType,
  onFocus,
  onBlur,
}) => {
  return (
    <View style={containerStyle}>
      {label && <Text style={labelStyle}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={onFocus}
        onBlur={onBlur}
        style={[textStyle]}
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default CustomTextInput;