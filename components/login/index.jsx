import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import styles from './style'
import { useState } from "react";

export default function Login(){
    const [user, setUser] = useState('')  
    const [pass, setPass] = useState('')  
    return(
        <View style={styles.container}>

            <View style={styles.box}>
                <Text style={styles.title}>Login</Text>
            </View>

            <View style={styles.box}>
                <TextInput style={styles.InputBox} placeholder="User" onChangeText={setUser} value={user}></TextInput>
            </View>

            <View style={styles.box}>
                <TextInput secureTextEntry={true} style={styles.InputBox} placeholder="Password" onChangeText={setPass} value={pass}></TextInput>
            </View>

            <View style={styles.box}>
                <TouchableOpacity  style={styles.button} 
                onPress={()=>{console.log('User: ', user)
                              console.log('Password: ', pass)}}>Send</TouchableOpacity>
            </View>

        </View>
  )
}