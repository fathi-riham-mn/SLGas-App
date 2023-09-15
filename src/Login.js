import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput} from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width:268, height:269, left:47, top:53, position:"absolute", borderRadius:30}} source={require('../assets/image/logo.png')}/>
            <Text style={{color:"#000000",fontSize:25,fontWeight:"bold"}} >Welcome!</Text>
            <Text style={{color:"#000000",fontSize:20,fontWeight:"bold", marginBottom:20}} >Login Here </Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Email</Text>
                <TextInput style={styles.textField} placeholder={'Enter Your Email'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Password'} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('Main')}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('ForgotPass')}>
                <Text style={{color:"#9D0505",marginTop:10, marginBottom: 20}}
                      >Forgot Password</Text>
            </TouchableOpacity>
            <Text style={{color:"black",marginTop:10,fontWeight:"bold"}}>Don't Have an Account?</Text>
            <TouchableOpacity>
                <Text style={{color:"#F83535"}} onPress={()=>navigation.navigate('Register')}>Create New Account Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:"67%",
        backgroundColor: '#F8D3D3',
        justifyContent:'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        paddingTop:"2%",
        paddingBottom:"0.30%",
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
        width:100,
        alignItems: "center"
    },
    btnText: {
        color: "Black",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});


export default Login