import { View, Text, Image, StyleSheet } from 'react-native';

//again, add Props. Probably going to have to do a for loop/for each loop in index to get future predictions

export default function FutureWeather(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>2pm</Text>
            <View style={styles.weatherIcon}></View>
            <Text style={styles.text}>46&deg;F</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 10
    },
    text: {
        color: '#fff',
        fontSize: 15
    },
    weatherIcon: {
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        borderRadius: 15
    }
});