import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  isUpdating: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleTheme, isUpdating }) => {
  const textColor = isDarkMode ? '#FFFFFF' : '#000000';
  const subtextColor = isDarkMode ? '#8E8E93' : '#6C6C70';

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={[styles.title, { color: textColor }]}>
            Atualização em Andamento
          </Text>
          {isUpdating && (
            <ActivityIndicator size="small" color="#0A84FF" style={styles.indicator} />
          )}
        </View>
        <Text style={[styles.subtitle, { color: subtextColor }]}>
          Status do Painel de Elevador
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 13,
    marginTop: 4,
  },
  indicator: {
    marginLeft: 8,
  },
});

export default Header;
