import React,{useState} from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0B0D5'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'whitesmoke'
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    InputBox: {
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        width: '90%',
        height: 30,
        color: 'gray',
        backgroundColor: 'whitesmoke',
        borderRadius: 7,
        padding: 5,
        outlineStyle: 'none'
    },
    button:{
        width: '20%',
        height: 40,
        marginTop: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        fontWeight: 'bold'
    }
  
})

export default styles