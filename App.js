import { Text, View, SafeAreaView } from "react-native";
import { useState } from "react";

import styles from "./styles/styles";
import Form from "./components/Form";
import CalculationResult from "./components/Calculation";

export default function App() {

  const [calculationResult, setCalculationResult] = useState({})

  const resultHandler = (data) => {
    setCalculationResult(data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.compactScreen}>
        <Text style={styles.appTitle}>EV Savings Calculator</Text>

        <Form resultHandler={resultHandler} />

        <CalculationResult result={calculationResult} />
      </View>
    </SafeAreaView>
  );
}
