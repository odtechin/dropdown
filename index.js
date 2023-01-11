
import {TextInput } from "react-native-paper";
function Dropdown (props){
    const {icon, iserror, label, val, setval, cstyle,backgroundColor,afterbackgroundColor} = props;

    const [backColor, setBackColor] = useState("black");
    const style = {
      backgroundColor: backColor,
      height: 55,
      marginVertical: 10,
      ...cstyle,
    };
    return (
      <TextInput
        label={"label"}
        mode="outlined"
        value={"val"}
        error={false}
        // onChangeText={(text) => setval(text)}
        outlineStyle={{
          borderColor: "#808080",
          borderRadius: 13,
          borderWidth: 1,
        }}
        style={style}
        textColor={"#fff"}
        onFocus={() => setBackColor("pink")}
        left={
          <TextInput.Icon
            style={{ paddingTop: 10 }}
            icon={"eye"}
            iconColor={"#000"}
          />
        }
      />
    );
}