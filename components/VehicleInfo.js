import { TextInput, View, Text } from "react-native";
import styles from "../styles/styles";
import colors from "../styles/colors";

const VehicleInfo = (props) => {
  const setPrice = (price) => {
    let vehicleInfo = props.vehicleInfo;

    vehicleInfo.price = price;
    props.setVehicleInfo(vehicleInfo);
  };

  const setMileage = (mileage) => {
    let vehicleInfo = props.vehicleInfo;

    vehicleInfo.mileage = mileage;
    props.setVehicleInfo(vehicleInfo);
  };

  return (
    <>
      <Text style={styles.vehicleInfoTitle}>
        {props.carType} Vehicle Information
      </Text>

      <View style={styles.vehicleInfoContainer}>
        <TextInput
          value={props.vehicleInfo.Price}
          onChangeText={setPrice}
          keyboardType="decimal-pad"
          placeholder={props.priceLabel}
          placeholderTextColor={colors.textInputPlaceholder}
          style={styles.textInput}
        />
        <TextInput
          value={props.vehicleInfo.Mileage}
          onChangeText={setMileage}
          keyboardType="decimal-pad"
          placeholder={props.mileageLabel}
          placeholderTextColor={colors.textInputPlaceholder}
          style={styles.textInput}
        />
      </View>
    </>
  );
};

export default VehicleInfo;
