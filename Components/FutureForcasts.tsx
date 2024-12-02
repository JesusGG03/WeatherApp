import { View, Image, Text, StyleSheet } from 'react-native';

export default function FutureForcasts(){
    return(
        <View style={styles.container}>

            <Text style={styles.dayText}>Monday</Text>
            
            <View style={styles.weatherIcon}></View>
            <View style={styles.tempInfo}>
                <Text style={styles.tempText}>High: 80</Text>
                <Text style={styles.tempText}>Low: 60</Text>
            </View>
        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20
    },
    dayText: {
        color: '#fff',
        fontSize: 17
    },
    weatherIcon: {
        backgroundColor: '#fff',
        height: 40,
        width: 40,
        borderRadius: 10
    },
    tempInfo: {
        gap: 5
    },
    tempText: {
        color: '#fff',
        fontSize: 17,
    }
});