
import {TextInput } from "react-native-paper";
function dropdown (props){
    const {icon, iserror, label, val, setval, cstyle,backgroundColor,afterbackgroundColor} = props;

    const [backColor, setBackColor] = useState(backgroundColor);
    const style = {
      backgroundColor: backColor,
      height: 55,
      marginVertical: 10,
      ...cstyle,
    };
    return (
      <TextInput
        label={label}
        mode="outlined"
        value={val}
        error={iserror}
        onChangeText={(text) => setval(text)}
        outlineStyle={{
          borderColor: "#808080",
          borderRadius: 13,
          borderWidth: 1,
        }}
        style={style}
        textColor={"#fff"}
        onFocus={() => setBackColor(afterbackgroundColor)}
        left={
          <TextInput.Icon
            style={{ paddingTop: 10 }}
            icon={icon}
            iconColor={"#000"}
          />
        }
      />
    );
}