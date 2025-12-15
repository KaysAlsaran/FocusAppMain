import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { BarChart, PieChart } from 'react-native-chart-kit';

import { useReportsLogic } from '../hooks/useReportsLogic';
import { reportsStyles as styles } from '../styles/reportsStyles';
import Card from '../components/Card';

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: "transparent",
  backgroundGradientTo: "transparent",
  color: (o=1)=>`rgba(168, 85, 247, ${o})`,
  strokeWidth: 2,
  barPercentage: 0.6,
  decimalPlaces: 0,
  labelColor: (o=1)=>`rgba(146, 157, 180, ${o})`,
  fillShadowGradientFrom: 'rgba(34, 211, 238, 0.7)',
  fillShadowGradientTo: 'rgba(34, 211, 238, 0.2)',
};

export default function ReportsScreen() {
  const { viewMode, setViewMode, stats, pieData, barData, barLabels } = useReportsLogic();

  const fmtTime = (s) => { const m = Math.floor(s/60); const sec = s%60; return m===0 ? `${sec}s` : `${m}m ${sec}s`; };
  const distTotal = pieData.reduce((a,b)=>a+b.population,0);
  const weekItems = barLabels.map((label, idx) => ({ label, value: barData[idx] || 0 }));

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Text style={styles.header}>Analytics</Text>
        </View>

        <Card style={styles.optionCard}>
          {['Today', 'Total'].map((m) => (
            <TouchableOpacity key={m} style={styles.optionRow} onPress={()=>setViewMode(m)}>
              <View style={styles.optionRadio}>{viewMode === m && <View style={styles.optionDot} />}</View>
              <Text style={[styles.optionText, viewMode===m && styles.optionTextActive]}>{m}</Text>
            </TouchableOpacity>
          ))}
        </Card>

        <View style={styles.statsRow}>
          <Card style={{ flex: 1, alignItems: 'center' }}><Text style={styles.cardTitle}>Time</Text><Text style={styles.cardValue}>{fmtTime(stats.time)}</Text></Card>
          <Card style={{ flex: 1, alignItems: 'center' }}><Text style={styles.cardTitle}>Pauses</Text><Text style={styles.cardValue}>{stats.distractions}</Text></Card>
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Division</Text>
          {pieData.length > 0 ? (
            <PieChart
              data={pieData}
              width={screenWidth - 48}
              height={220}
              accessor="population"
              backgroundColor="transparent"
              center={[0,0]}
              chartConfig={chartConfig}
              hasLegend={true}
            />
          ) : <Text style={styles.noData}>No data yet.</Text>}
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Weekly Data</Text>
          <BarChart
            data={{ labels: barLabels, datasets: [{ data: barData }] }}
            width={screenWidth - 48}
            height={240}
            yAxisLabel=""
            yAxisSuffix="m"
            chartConfig={chartConfig}
            showValuesOnTopOfBars
            style={styles.graphStyle}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}