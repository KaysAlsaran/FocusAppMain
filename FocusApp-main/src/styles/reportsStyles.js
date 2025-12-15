import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const reportsStyles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1, padding: 24 },
  
  headerRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 18 },
  header: { fontSize: 26, fontWeight: '900', color: colors.text, letterSpacing: -0.2 },
  
  optionCard: { paddingVertical: 4, paddingHorizontal: 12, marginBottom: 18 },
  optionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, gap: 10 },
  optionRadio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  optionDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.accent },
  optionText: { color: colors.subtext, fontWeight: '800', fontSize: 14 },
  optionTextActive: { color: colors.text },
  
  statsRow: { flexDirection: 'row', gap: 16, marginBottom: 22 },
  cardTitle: { fontSize: 12, color: colors.subtext, fontWeight: '700', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.3 },
  cardValue: { fontSize: 24, fontWeight: '900', color: colors.text },
  
  chartContainer: { backgroundColor: colors.surface, borderRadius: 22, padding: 20, marginBottom: 20, elevation: 3, borderWidth: 1, borderColor: colors.border },
  chartTitle: { fontSize: 16, fontWeight: '800', color: colors.text, marginBottom: 15, textAlign: 'center' },
  
  graphStyle: { borderRadius: 16 },
  noData: { textAlign: 'center', color: colors.subtext, marginVertical: 30, fontStyle: 'italic' },
  
  sectionHeader: { fontSize: 18, fontWeight: '800', color: colors.text, marginBottom: 15, marginTop: 10 },
  historyItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.surface, padding: 16, borderRadius: 14, marginBottom: 10, elevation: 2, borderWidth: 1, borderColor: colors.border },
  historyCat: { fontWeight: '700', color: colors.text, fontSize: 16 },
  historyDate: { color: colors.subtext, fontSize: 12, marginTop: 4 },
  historyDuration: { fontWeight: '800', color: colors.primary, fontSize: 16 },
  historyLoss: { color: colors.danger, fontSize: 12, marginTop: 2 }
});