import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image,} from 'react-native'

const Main = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width:268, height:269, left:47, top:53, position:"absolute", borderRadius:30}} source={require('../assets/image/logo.png')}/>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Types')}>
                    <Text style={styles.btnText}>LP Gas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Main')}>
                    <Text style={styles.btnText}>Live Queue Maps</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Main')}>
                    <Text style={styles.btnText}>Notification</Text>
                </TouchableOpacity>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:"40%",
        backgroundColor: '#F8D3D3',
        justifyContent:'center',
        alignItems: 'center',
    },
    
    btn : {
        marginTop: 25,
        padding:10,
        backgroundColor:'#F67F7F',
        width:"80%",
        alignItems: "center",
        borderRadius:10,
    },
    btnText: {
        color: "Black",
        fontSize: 25,
        fontWeight: "bold",
        padding:10
    }
});


export default Main