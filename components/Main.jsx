import { StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { AnimatedGameCard } from './GameCard';
import { Logo } from './Logo';
import { useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

useEffect(() => {
  getLatestGames().then((games) => {
    setGames(games);
  });
}, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>
        {games.length === 0 ? (
            <ActivityIndicator color={"#333"} size={"large"}/>
        ) : (
            <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({item, index}) => <AnimatedGameCard index={index} game={item} />} />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#09f',
    fontSize: 24,
    fontWeight: 'bold',
  }
});
