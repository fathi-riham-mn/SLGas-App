import React from 'react'
import {StyleSheet,  View,TouchableOpacity, Image,} from 'react-native'

const Types = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width:268, height:269, left:47, top:53, position:"absolute", borderRadius:30}} source={require('../assets/image/logo.png')}/>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('Litro')}>
                <Image style={styles.btnImage} source={require('../assets/image/download.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('Laugfs')}>
                <Image style={styles.btnImage} source={require('../assets/image/images.png')}/>
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
        backgroundColor:'#F67F7F',
        width:"41%",
        alignItems: "center",
        borderRadius:30,
    },
    btnImage: {
        width:'239px',
        height:'130px',
    }
});


export default Types