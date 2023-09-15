import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,} from 'react-native'

const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width:268, height:269, left:47, top:53, position:"absolute", borderRadius:30}} source={require('../assets/image/logo.png')}/>
            <Text style={{color:"black",fontSize:25,fontWeight:"bold",marginBottom:10}} >Create New Account</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Email</Text>
                <TextInput style={styles.textField} placeholder={'Enter Email'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Phone Number</Text>
                <TextInput style={styles.textField} placeholder={'Enter Phone Number'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Password'} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >Re-type Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Password Again'} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.btnText}>Create Account Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:"75%",
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
        marginBottom:5,
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


export default Register