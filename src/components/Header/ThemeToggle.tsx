import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface ThemeToggleProps {
  value: boolean;
  onValueChange: (val: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🌙</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#767577', true: '#FF0000' }}
        thumbColor={value ? '#FFFFFF' : '#F4F3F4'}
      />
      <Text style={[styles.label, { color: value ? '#FFFFFF' : '#000000' }]}>
        Modo Escuro
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    marginBottom: 2,
  },
  label: {
    fontSize: 10,
    marginTop: 2,
  },
});

export default ThemeToggle;
