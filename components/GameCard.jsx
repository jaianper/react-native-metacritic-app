import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { Score } from './Score';

export function GameCard({ game }) {
    return (
      <View key={game.slug} className='flex-row bg-slate-400/10 p-4 rounded-xl gap-4 mb-10'>
        <Image source={{ uri: game.image }} style={styles.image} />
        <View>
          <Text style={styles.title} className='mb-1'>{game.title}</Text>
          <Score score={game.score} maxScore={100} />
          <Text style={styles.description} className='mt-2 flex-shrink-0'>
            {game.description.slice(0, 100)} ...
          </Text>
        </View>
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
  