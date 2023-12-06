import { View, Text } from "react-native";
import styles from "../styles/styles";

const SavingInfo = (props) => {
  return (
    <>
      <Text style={styles.savingInfoHeader}>
        By switching to electric, you obtain:
      </Text>

      <View style={styles.savingsInfo}>
        <Text style={styles.savingsInfoAmt}>{props.amount > 0 ? `$${props.amount}` : `-$${Math.abs(props.amount)}`}</Text>
        <Text style={styles.savingsInfoBottomLabel}>in savings per year</Text>
      </View>
    </>
  );
};

export default SavingInfo;
