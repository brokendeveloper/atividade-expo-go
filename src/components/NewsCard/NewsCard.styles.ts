import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 14,
    marginVertical: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: 28,
    marginRight: 12,
    marginTop: 2,
  },
  meta: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    flex: 1,
    marginRight: 8,
  },
  timestamp: {
    fontSize: 11,
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
  },
  description: {
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
    marginTop: 6,
    lineHeight: 18,
  },
});
