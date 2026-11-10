import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../constants/theme';


export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="search-outline" size={26} color={colors.textDark} />
      <Ionicons name="ellipsis-vertical" size={22} color={colors.textDark} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  title: {
    flex: 1,
    fontFamily: fonts.bold,
    fontSize: 26,
    color: colors.primary,
  },
});