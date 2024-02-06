import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.acima}>
        <Text style={styles.texto}>SENAI</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.abaixo}>
        <Text style={{color: 'white',fontSize:'45px'}}>BOSCH</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  acima: {
    backgroundColor: "whitesmoke",
    flex: 0.4,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  abaixo: {
    backgroundColor: "pink",
    flex: 0.6,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontWeight: 'bold',
    fontSize: 30,
    color: 'gray',
  }
});
