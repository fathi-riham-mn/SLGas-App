import React from 'react'
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity,} from 'react-native'

const CheckAvailability = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width:268, height:269, left:47, top:53, position:"absolute", borderRadius:30}} source={require('../assets/image/logo.png')}/>
            <Text style={{color:"black",fontSize:25,fontWeight:"bold",marginTop:10}} >CheckAvailability</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Name</Text>
                <TextInput style={styles.textField} placeholder={'Enter Your Name'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Phone Number</Text>
                <TextInput style={styles.textField} placeholder={'Enter Your Phone Number'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >District area</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Your District area'} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >City/Town</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Your City'} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >Postal Code</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter Your Postal Code'} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('Main')}>
                <Text style={styles.btnText}>Search</Text>
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
        padding:"1%",
        borderRadius:6,
    },
    headField: {
        marginTop:9,
        color:"black",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:5,
    },
    btn : {
        marginTop: 10,
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


export default CheckAvailability