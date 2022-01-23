import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  //useState methodu ilk elemani degisken, ikinci elemani method olan bir array
  //donduruyor. Bu arrayi destructure ederek kullaniyoruz. Destructure ettigimiz
  //yapi bir getter/setter
  const [text, setText] = useState("Hello World!");
  const [textInput, setTextInput] = useState("");

  //Button'a basildiginda tetiklenen fonksiyon
  const handleOnPress = () => {
    let _text = textInput.trim();
    if (_text && _text.length >= 3) {
      _text = _text[0].toUpperCase() + _text.slice(1)
      setText(_text)
    }
    else {
      alert("Metin 3 harften kisa olamaz!")
    }
    setTextInput("")
  }

  //TextInput uzerindeki metin degistiginde tetiklenen fonskiyon
  const handleOnChangeText = (text) => setTextInput(text);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.header}>Welcome to the first class of React Native!</Text>
        <Text style={styles.text}>{text}</Text>
        <TextInput value={textInput} onChangeText={handleOnChangeText} style={styles.textInput} placeholder='Write here...' />
        <Button title={"Press on me!"} onPress={handleOnPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 250,
    justifyContent: "space-around",
    alignItems: 'center',
    borderWidth: 5,
    padding: 5,
    borderRadius: 10,
    borderColor: 'green'
  },
  header: {
    fontSize: 16,
    color: 'white',
    fontWeight: 800,
  },
  text: {
    fontSize: 24,
    fontWeight: 800,
  },
  textInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5
  }
});
