import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text } from "react-native";
import styles from "../styles/styles";

const TravelInfo = (props) => {
  return (
    <View
      style={[styles.travelInfo, { backgroundColor: props.backgroundColor }]}
    >
      <FontAwesome5 name={props.image} size={24} color="black" />
      <Text style={styles.travelInfoMainLabel}>{props.mainLabel}</Text>
      <Text>{props.bottomLabel}</Text>
    </View>
  );
};

export default TravelInfo;
