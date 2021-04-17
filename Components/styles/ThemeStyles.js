import {StyleSheet} from 'react-native';


export const Colors = {
  dark: 'black',
  light: 'white',
  halloween: 'orange',
  sunshine: 'yellow',
  patty: 'green',
};

const lightStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light,
  },
  box: {
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 1,
    height: 75,
    width: 100,
    borderColor: Colors.dark,
  },
});

const darkStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.dark,
  },
  box: {
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 1,
    height: 75,
    width: 100,
    borderColor: Colors.light,
  },
});

const halloweenStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.halloween,
  },
  box: {
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 1,
    height: 75,
    width: 100,
    borderColor: Colors.dark,
  },
});

const sunshineStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.sunshine,
  },
  box: {
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 1,
    height: 75,
    width: 100,
    borderColor: Colors.halloween,
  },
});


const pattyStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.patty,
  },
  box: {
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: 1,
    height: 75,
    width: 100,
    borderColor: Colors.light,
  },
});



export default function getStyleSheet(theTheme){
  console.log("From stylesheet: the state: " + theTheme);
  if (theTheme == "HalloweenTheme") {      
      return halloweenStyleSheet }
  else if (theTheme == "PattyTheme") { 
      return pattyStyleSheet}
  else if (theTheme == "DarkTheme") {
    return darkStyleSheet } 
  else if (theTheme == "SunshineTheme"){
    return sunshineStyleSheet}
  else if (theTheme == "LightTheme")
  { return lightStyleSheet}
  else 
  return lightStyleSheet
};
