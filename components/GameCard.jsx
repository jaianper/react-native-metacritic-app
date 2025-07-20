import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounder-xl p-4">
        <View key={game.slug} className="flex-row gap-4">
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text style={styles.title} className="mb-1">
              {game.title}
            </Text>
            <Score score={game.score} maxScore={100} />
            <Text style={styles.description} className="mt-2 flex-shrink">
              {game.description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
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
    fontWeight: "bold",
    color: "#dbdbdb",
  },
  description: {
    fontSize: 16,
    color: "#dbdbdb",
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
    fontWeight: "bold",
    color: "green",
  },
});
