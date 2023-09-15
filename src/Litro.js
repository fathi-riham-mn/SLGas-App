import React from 'react'
import {StyleSheet, View, TouchableOpacity, Image, Text,} from 'react-native'
const Litro = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Image style={{width:268, height:269, left:47, top:53, position:"absolute", borderRadius:30}} source={require('../assets/image/Litro_Gas_Lanka.png')}/>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('CheckAvailability')}>
                <Text style={styles.btnText}>5Kg</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('CheckAvailability')}>
                <Text style={styles.btnText}>12.5Kg</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('CheckAvailability')}>
                <Text style={styles.btnText}>37.5Kg</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:"35%",
        backgroundColor: '#F8D3D3',
        justifyContent:'center',
        alignItems: 'center',
    },

    btn : {
        marginTop: 40,
        padding:0,
        backgroundColor:'#021762',
        width:"20%",
        alignItems: "center",
        borderRadius:30,
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});


export default Litro