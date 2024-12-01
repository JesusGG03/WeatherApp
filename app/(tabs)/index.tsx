import { Text, View, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import WeatherPresentation from "@/Components/WeatherPresentation";
import FutureWeather from "@/Components/FutureWeather";



export default function Index() {
  
  return (
    <View style={styles.container} >
      <LinearGradient colors={['#F2720C', '#E27E7E']} style={styles.background}/>
        <WeatherPresentation/>
        <View style={styles.predictionContainer}>
          <FutureWeather/>
          <FutureWeather/>
          <FutureWeather/>
          <FutureWeather/>
          <FutureWeather/>
          <FutureWeather/>
          <FutureWeather/>
          <FutureWeather/>
          <FutureWeather/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 950,
  },
  predictionContainer: {
    backgroundColor: '#C25B0A',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    height: 160,
    flexDirection: 'row',
    gap: 20,
    paddingLeft: 20,
    overflow: 'hidden',
  }
});