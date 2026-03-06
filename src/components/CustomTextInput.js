import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CustomTextInput = ({
  placeholder,
  label,
  labelStyle,
  value,
  containerStyle,
  textStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={value}
        style={[textStyle, { flex: 1 }]}  // ← flex:1 instead of fixed width
      />
    </View>
  );
};

export default CustomTextInput;