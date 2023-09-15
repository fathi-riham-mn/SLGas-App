import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,} from 'react-native'

const ForgotPass = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width:268, height:269, left:47, top:53, position:"absolute", borderRadius:30}} source={require('../assets/image/logo.png')}/>
            <Text style={{color:"#000000",fontSize:25,fontWeight:"bold",marginBottom:20}} >Create New Account</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Email / Phone Number</Text>
                <TextInput style={styles.textField} placeholder={'Enter Email / Phone Number'}/>
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.btnText}>Send </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8D3D3',
        justifyContent:'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        paddingBottom:"2%",
    },
    textField: {
        backgroundColor:"#fff0e1",
        padding:"2%",
        borderRadius:6,
    },
    headField: {
        marginTop:15,
        color:"black",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
    },
    btn : {
        marginTop: 20,
        backgroundColor:'#F67F7F',
        borderRadius:10,
        width:250,
        alignItems: "center"
    },
    btnText: {
        color: "Black",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});


export default ForgotPass