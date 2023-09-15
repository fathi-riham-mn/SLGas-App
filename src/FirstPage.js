import React from 'react'
import {StyleSheet, Text, View,TouchableOpacity, Image,} from 'react-native'

const FirstPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width:268, height:269, left:47, top:53, position:"absolute", borderRadius:30}} source={require('../assets/image/logo.png')}/>
                <Text style={{color:"Black", fontSize:28, fontWeight:"bold",}}>Welcome to  </Text>
                <Text style={{color:"Black", fontSize:36, fontWeight:"bold",}}>SL Gas</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Register')}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:"15%",
        backgroundColor: '#F8D3D3',
        justifyContent:'center',
        alignItems: 'center',
    },
    
    btn : {
        marginTop: 40,
        padding:0,
        backgroundColor:'#F67F7F',
        width:"41%",
        alignItems: "center",
        borderRadius:30,
    },
    btnText: {
        color: "Black",
        fontSize: 24,
        fontWeight: "bold",
        padding:4,
    }
});


export default FirstPage