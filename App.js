import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './client/Hello';
import Register from './client/Register';
import Card from './client/Card';


export default function App() {
    const data = "Hello From App Ani!"
    const any = "let's get into it!"
  return (
    <View style={styles.container}>
      <Text>Hello Ani!</Text>
      <Hello data={data} new={any}/>
      <Register data={data} />
      <Card />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
