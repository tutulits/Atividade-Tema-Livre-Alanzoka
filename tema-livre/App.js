import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.paragraph}>ALAN FERREIRA PEREIRA</Text>
        <View>
          <Image source={require('./assets/alan.jpg')} style={styles.img} />
        </View>
        <Text style={styles.titulo2}>Historia</Text>
        <Text style={styles.premio}>
          Alanzoka é um dos principais streamers e influenciadores do Brasil,
          conhecido por suas transmissões ao vivo na plataforma Twitch. Ele se
          destaca principalmente pelo seu carisma e humor, criando uma conexão
          forte com seus seguidores. Alanzoka é famoso por jogar uma grande
          variedade de games, desde títulos de ação até jogos mais
          descontraídos, sempre com uma abordagem divertida e cheia de energia.
          Além de seu talento nos games, ele também compartilha momentos do seu
          dia a dia e interage bastante com seu público, fazendo com que sua
          comunidade cresça e se fortaleça ao longo do tempo.
        </Text>
        <Text style={styles.titulo2}>Colegas de Trabalho</Text>
        <ScrollView horizontal>
          <View>
            <Image
              source={require('./assets/noitada.jpg')}
              style={styles.img}
            />
          </View>
          <View>
            <Image source={require('./assets/alan3.jpg')} style={styles.img} />
          </View>
          <View>
            <Image source={require('./assets/alan2.jpg')} style={styles.img} />
          </View>
          <View>
            <Image source={require('./assets/alan4.jpg')} style={styles.img} />
          </View>
          <View>
            <Image source={require('./assets/alan5.jpg')} style={styles.img} />
          </View>
        </ScrollView>

        <Text style={styles.titulo2}>Plataformas e Redes Sociais</Text>
        <ScrollView horizontal>
          <View>
            <Text style={styles.premio}>Youtube: youtube.com/@alanzoka</Text>
          </View>
          <View>
            <Text style={styles.premio}>Twitch: twitch.tv/alanzoka</Text>
          </View>
           <View>
            <Text style={styles.premio}>Instagram: instagram.com/alanzoka</Text>
          </View>
           <View>
            <Text style={styles.premio}>Twitter: twitter.com/alanzoka</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4B0082',
    borderRadius: 8,
  },
  img: {
    width: 395,
    height: 280,
    marginTop: 8,
  },
  premio: {
    backgroundColor: '#4B0082',
    margin: 8,
    padding: 8,
    borderRadius: 8,
    color: '#fff',
    fontSize: 20
  },
  titulo2: {
    fontFamily: 'Arial',
    fontSize: 22,
    marginTop: 10,
    color: '#4B0082',
    backgroundColor: '#fff',
    borderRadius: 8,
    textAlign: 'center',
  },
});
