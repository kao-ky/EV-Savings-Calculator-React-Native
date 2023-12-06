import { Text, Pressable } from "react-native";
import { useState } from "react";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

import VehicleInfo from "./VehicleInfo";
import styles from "../styles/styles";

const annualMileageList = ["15000", "25000", "40000"];

const form = (props) => {
  // Vehicle Info Text Inputs
  const [gasVehicleInfo, setGasVehicleInfo] = useState({})
  const [electricVehicleInfo, setElectricVehicleInfo] = useState({})

  // Segmented Control
  const initialIndex = 0
  const [mileageValue, setMileageValue] = useState(annualMileageList[initialIndex]);
  const [mileageIndex, setMileageIndex] = useState(initialIndex);

  const calculate = () => {
    const gasPrice = parseFloat(gasVehicleInfo.price)
    const gasMileage = parseFloat(gasVehicleInfo.mileage)
    const elecPrice = parseFloat(electricVehicleInfo.price)
    const elecMileage = parseFloat(electricVehicleInfo.mileage)
    const annualMileage = parseFloat(mileageValue)

    // calculation for distance
    const electricDistance = elecMileage * gasPrice / elecPrice
    const additionalDistance = electricDistance - gasMileage
   
    // calculation for savings
    const gasCost = gasPrice * annualMileage / gasMileage
    const electricityCost = elecPrice * annualMileage / elecMileage

    const savings = gasCost - electricityCost

    const data = {
      gasDistance: gasMileage,
      electricDistance: electricDistance,
      additionalDistance: additionalDistance,
      savings: savings,
    }

    props.resultHandler(data)
  }

  return (
    <>
      {/* Text Inputs */}
      <VehicleInfo
        carType="Gas"
        priceLabel="Price per litre (S/L)"
        mileageLabel="Gas mileage (km/L)"
        vehicleInfo={gasVehicleInfo}
        setVehicleInfo={setGasVehicleInfo}
      />

      <VehicleInfo
        carType="Electric"
        priceLabel="Utilities cost ($/kwH)"
        mileageLabel="EV mileage (km/kwH)"
        vehicleInfo={electricVehicleInfo}
        setVehicleInfo={setElectricVehicleInfo}
      />

      {/* Segmented Picker */}
      <Text style={styles.sectionTextLabel}>
        How many km do you drive each year?
      </Text>
      <SegmentedControl
        values={annualMileageList}
        selectedIndex={mileageIndex}
        onChange={(event) => setMileageIndex(event.nativeEvent.mileageIndex)}
        onValueChange={setMileageValue}
      />

      {/* Button */}
      <Pressable onPress={calculate} style={styles.calculateButton}>
        <Text style={styles.calculateButtonText}>Estimate savings</Text>
      </Pressable>
    </>
  );
};

export default form;
