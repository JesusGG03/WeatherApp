import { Text, View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import WeatherPresentation from "@/Components/WeatherPresentation";
import FutureWeather from "@/Components/FutureWeather";
import FutureForcasts from "@/Components/FutureForcasts";



export default function Index() {
  
  return (
    <ScrollView style={styles.container} >
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
        
        <View style={styles.futureForcastContainer}>
          <FutureForcasts/>
          <FutureForcasts/>
          <FutureForcasts/>
          <FutureForcasts/>
          <FutureForcasts/>
          <FutureForcasts/>
          <FutureForcasts/>
          
        </View>
    </ScrollView>
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
    height: 2000,
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
  },
  futureForcastContainer:{
    backgroundColor: '#C25B0A',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    height: 'auto',
    gap: 20
  }
});