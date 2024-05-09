import { StyleSheet, Dimensions } from "react-native";

const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;
const VW = W / 100;
const VH = H / 100;
const subtitles = 25;
const paragraphs = 18;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
  },

  mainCLock: {
    color: "white",
    marginTop: VH * 10,
  },

  mainImg: {
    width: VW * 40,
    resizeMode: "contain",
  },

  mainText: {
    color: "white",
    marginBottom: VH * 5,
  },

  //settings
  containerSettings: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },

  backFromSettings: {
    marginTop: VH*8,
    marginBottom: 10,
    borderWidth: 1,
    width: W,
    textAlign: "center",
    alignItems: "center",
  },

  backFromSettingsText: {
    color: "white",
    borderWidth: 1,
    margin: 10,
	fontSize: subtitles,
  },

  settingWrapper: {
    borderWidth: 1,
    borderRadius: 5,
    width: "100%"
  },

  setting: {
    borderColor: "blue",
    margin: 15,
	fontSize: paragraphs,
    color: "white"
  }
});
