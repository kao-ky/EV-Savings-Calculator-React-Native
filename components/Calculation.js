import { View, Text } from "react-native";

import styles from "../styles/styles";
import TravelInfo from "./TravelInfo";
import SavingInfo from "./SavingInfo";

const CalculationResult = (props) => {
  return (
    <>
      <Text style={styles.travelSectionHeader}>
        For the price of 1 litre of gas, you can travel:
      </Text>

      <View style={styles.allTravelInfoContainer}>
        <TravelInfo
          image="gas-pump"
          mainLabel={parseFloat(props.result?.gasDistance ?? 0).toFixed(2)}
          bottomLabel="km"
          backgroundColor="pink"
        />
        <TravelInfo
          image="plug"
          mainLabel={parseFloat(props.result?.electricDistance ?? 0).toFixed(2)}
          bottomLabel="km"
          backgroundColor="cyan"
        />
        <TravelInfo
          image="arrow-circle-right"
          mainLabel={parseFloat(props.result?.additionalDistance ?? 0).toFixed(2)}
          bottomLabel="km more"
          backgroundColor="orange"
        />
      </View>

      <SavingInfo amount={parseFloat(props.result?.savings ?? 0).toFixed(2)} />
    </>
  );
};

export default CalculationResult;
