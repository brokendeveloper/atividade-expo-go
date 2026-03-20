import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  isUpdating: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleTheme, isUpdating }) => {
  const textColor = isDarkMode ? '#FFFFFF' : '#0F0F0F';
  const subtextColor = isDarkMode ? '#AAAAAA' : '#606060';

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <FontAwesome5 name="youtube" size={22} color="#FF0000" style={styles.ytIcon} />
          <Text style={[styles.title, { color: textColor }]}>YouTube Studio</Text>
          {isUpdating && (
            <ActivityIndicator size="small" color="#FF0000" style={styles.indicator} />
          )}
        </View>
        <Text style={[styles.subtitle, { color: subtextColor }]}>
          Painel de Elevador · Ao vivo
        </Text>
      </View>
      <ThemeToggle value={isDarkMode} onValueChange={onToggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingTop: 48,
  },
  content: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ytIcon: {
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
  },
  indicator: {
    marginLeft: 8,
  },
});

export default Header;
