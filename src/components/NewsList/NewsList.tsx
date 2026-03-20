import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NewsItem } from '../../types/news';
import NewsCard from '../NewsCard/NewsCard';

interface NewsListProps {
  items: NewsItem[];
  isDarkMode: boolean;
}

const NewsList: React.FC<NewsListProps> = ({ items, isDarkMode }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {items.map(item => (
        <NewsCard key={item.id} item={item} isDarkMode={isDarkMode} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});

export default NewsList;
