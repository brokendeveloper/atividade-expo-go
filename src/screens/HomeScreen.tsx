import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header/Header';
import NewsList from '../components/NewsList/NewsList';
import OTAProgressBar from '../components/OTAProgressBar/OTAProgressBar';
import useTheme from '../hooks/useTheme';
import useOTAProgress from '../hooks/useOTAProgress';
import { youtubeNewsData } from '../constants/newsData';

const HomeScreen: React.FC = () => {
  const { isDarkMode, theme, toggleTheme } = useTheme();
  const { current, total, isUpdating } = useOTAProgress();

  return (
    <LinearGradient colors={theme.background} style={styles.container}>
      <View style={styles.inner}>
        <Header
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          isUpdating={isUpdating}
        />
        <NewsList items={youtubeNewsData} isDarkMode={isDarkMode} />
        <OTAProgressBar current={current} total={total} isDarkMode={isDarkMode} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
});

export default HomeScreen;
