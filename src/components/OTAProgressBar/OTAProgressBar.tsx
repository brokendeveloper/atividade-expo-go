import React, { useEffect, useRef } from 'react';
import { View, Text, ActivityIndicator, Animated, StyleSheet } from 'react-native';
import { getOTAStatusLabel } from '../../services/otaService';

interface OTAProgressBarProps {
  current: number;
  total: number;
  isDarkMode: boolean;
}

const OTAProgressBar: React.FC<OTAProgressBarProps> = ({ current, total, isDarkMode }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const textColor = isDarkMode ? '#8E8E93' : '#6C6C70';
  const borderColor = isDarkMode ? '#2C2C2E' : '#E5E5EA';

  useEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [current]);

  return (
    <View style={[styles.container, { borderTopColor: borderColor }]}>
      <ActivityIndicator size="small" color="#FF0000" />
      <Animated.Text style={[styles.label, { color: textColor, opacity: fadeAnim }]}>
        {getOTAStatusLabel(current, total)}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderTopWidth: 1,
    gap: 8,
  },
  label: {
    fontSize: 13,
  },
});

export default OTAProgressBar;
