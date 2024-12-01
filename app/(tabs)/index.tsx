import { Text, View, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import WeatherPresentation from "@/Components/WeatherPresentation";



export default function Index() {
  
  return (
    <View style={styles.container} >
      <LinearGradient colors={['#F2720C', '#E27E7E']} style={styles.background}/>
        <WeatherPresentation/>
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
});