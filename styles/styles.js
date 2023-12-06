import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  // container
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  compactScreen: {
    paddingHorizontal: 20,
  },
  appTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },

  // vehicle form
  vehicleInfoContainer: {
    flexDirection: "row",
    gap: 20,
  },
  vehicleInfoTitle: {
    paddingVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: colors.textInputBackground,
  },
  sectionTextLabel: {
    marginVertical: 10,
  },
  calculateButton: {
    backgroundColor: colors.buttonBackground,
    padding: 10,
    borderRadius: 10,
    marginVertical: 30,
  },
  calculateButtonText: {
    textAlign: "center",
    color: colors.buttonText,
    fontSize: 20,
  },

  // est. result
  travelSectionHeader: {
    textAlign: "center",
    fontSize: 15,
  },
  allTravelInfoContainer: {
    marginVertical: 15,
    flexDirection: "row",
    gap: 10,
  },
  travelInfo: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  travelInfoMainLabel: {
    paddingTop: 5,
    fontWeight: "bold",
    fontSize: 25,
  },

  // savings info
  savingInfoHeader: {
    textAlign: "center",
    fontSize: 15,
    marginVertical: 15,
  },
  savingsInfo: {
    backgroundColor: "black",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
  },
  savingsInfoAmt: {
    fontSize: 30,
    color: "white",
  },
  savingsInfoBottomLabel: {
    color: "white",
  },
});

export default styles;
