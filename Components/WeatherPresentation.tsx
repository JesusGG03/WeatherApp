import { View, Image, Text, StyleSheet} from 'react-native';

// adding props to the component to autofill the temperature, location, and conditions


export default function WeatherPresentation(){
    return(
        <View style={styles.container}>
            <Text style={styles.locationText}>Weather Component</Text>
            <View style={styles.weatherInfoContainer}>
                <View style={styles.weatherIconPlaceHolder}></View>
                <View style={styles.weatherInfo}>
                    <Text style={styles.tempText}>36&deg;F</Text>
                    <View style={styles.weatherCondition}>
                        <Text style={styles.weatherConditionText}>Rain</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        
        marginTop: 80,
        width: '95%',
        alignSelf: 'center',
        gap: 20,
    },
    tempText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 30,
    },
    locationText: {
        color: '#ffff',
        fontSize: 25,
        textAlign: 'left',
        paddingLeft: 15,
    },
    weatherIconPlaceHolder: {
        backgroundColor: '#fff',
        height: 170,
        width: 170,
    },
    weatherInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 20,
    },
    weatherInfo: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'center'
    },
    weatherCondition: {
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    weatherConditionText: {
        color: '#fff'
    }
});