import React from 'react';
import { View, Text } from 'react-native';
import { NewsItem } from '../../types/news';
import { styles } from './NewsCard.styles';

interface NewsCardProps {
  item: NewsItem;
  isDarkMode: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ item, isDarkMode }) => {
  const cardBg = isDarkMode ? '#1C1C1E' : '#FFFFFF';
  const textColor = isDarkMode ? '#FFFFFF' : '#000000';
  const subtextColor = isDarkMode ? '#8E8E93' : '#6C6C70';

  return (
    <View style={[styles.card, { backgroundColor: cardBg }]}>
      <View style={styles.row}>
        <Text style={styles.icon}>{item.icon}</Text>
        <View style={styles.meta}>
          <View style={styles.titleRow}>
            <Text style={[styles.title, { color: textColor }]} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={[styles.timestamp, { color: subtextColor }]}>
              {item.timestamp}
            </Text>
          </View>
          <Text style={[styles.description, { color: subtextColor }]}>
            {item.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;
