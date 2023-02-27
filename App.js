import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <SurpresaScreen />
      <SobreScreen />
      <ContatoScreen />
      <Icon />
      <Container />
    </View>
  );
}

// HOME


function HomeScreen() {
  return (
    <View>
      <Text>Sou a HomeScreen</Text>
    </View>
  )
}

// SURPRESA

function SurpresaScreen() {
  return (
    <View>
      <Image
        source={
          // { Por URL
          //   uri:'http://picsum.photos/300/300'
          // }

          // Imagem baixada no PC
          require('./src/pinguim.png')
        }

        style={
          styles.image
        }
      />

    </View>
  )
}

// SobreScreen

function SobreScreen() {
  return (
    <View>
      <Text>Ana Beatriz</Text>
      <Text>Hello!</Text>
    </View>
  )
}

// CONTATO

function ContatoScreen() {
  return (
    <View>
      <Text>Forma de entrar em contato comigo:</Text>
      <Text>anabeatriz.silva1929@gmail.com</Text>
    </View>
  )
}

// ICON

function Icon() {
  return (
    <View>
      <Image
        source={
          require('./src/icon.png')
        }

        style={
          icon.icon
        }
      />
    </View>
  )
}

function Container() {
  return (
    <View
      style={
        container.background
      }
    />
  )
}

// CSS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 20,
    marginTop: 20,
  }
});


const icon = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    marginTop: 35,
  }
})

const container = StyleSheet.create({
  background: {
    backgroundColor: 'purple',
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10
  }
})