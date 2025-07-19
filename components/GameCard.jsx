import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';

export function GameCard({ game }) {
    return (
        <View key={game.slug} style={styles.card}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.score}>{game.score}</Text>
          <Text style={styles.description}>{game.description}</Text>
        </View>
    );
}

export function AnimatedGameCard({ game, index}) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#dbdbdb'
    },
    description: {
      fontSize: 16,
      color: '#dbdbdb'
    },
    image: {
      width: 100,
      height: 100,
    },
    card: {
      marginBottom: 30,
    },
    score: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'green',
    }
  });
  