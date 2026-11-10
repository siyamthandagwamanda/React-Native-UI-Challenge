import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../constants/theme';

type TabProps = { label: string; active?: boolean };

// One tab in the Chat / Status / Calls bar.

function Tab({ label, active }: TabProps) {

  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={({ pressed }) => [
        styles.tab,
        active && styles.tabActive,
        (hovered || pressed) && (active ? styles.tabActiveHover : styles.tabHover),
      ]}
    >
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </Pressable>
  );
}

type Props = { tabs: string[]; activeTab: string };

// The whole tab bar. It receives the list of tabs and which one is highlighted,
// and draws one Tab per item so the tab code is written only once.
export default function SegmentedTabs({ tabs, activeTab }: Props) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <Tab key={tab} label={tab} active={tab === activeTab} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primarySoft,
    borderRadius: 14,
    marginHorizontal: 24,
    marginBottom: 8,
  },
  tab: {
    flex: 1,
    height: 46,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabHover: { backgroundColor: '#FBD9C8' },
  tabActive: {
    backgroundColor: colors.primary,
    elevation: 5,
    shadowColor: colors.primary,
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  tabActiveHover: { backgroundColor: '#D9550C' },
  label: { fontFamily: fonts.bold, fontSize: 15, color: colors.primary },
  labelActive: { color: colors.white },
});