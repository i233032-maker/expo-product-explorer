import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

type Product = {
  id: string;
  name: string;
  price: string;
};

const PRODUCTS: Product[] = [
  { id: '1', name: 'MacBook Pro M3', price: '$1999' },
  { id: '2', name: 'iPhone 15 Pro Max', price: '$1199' },
  { id: '3', name: 'AirPods Pro 2', price: '$249' },
  { id: '4', name: 'Apple Watch Ultra 2', price: '$799' },
  { id: '5', name: 'iPad Pro M4', price: '$999' },
];

export default function ProductsScreen() {
  const renderItem = ({ item }: { item: Product }) => (
    <ThemedView type="backgroundElement" style={styles.productCard}>
      <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
      <ThemedText>{item.price}</ThemedText>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title" style={styles.headerTitle}>Our Products</ThemedText>
        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  headerTitle: {
    padding: Spacing.four,
  },
  listContent: {
    paddingHorizontal: Spacing.four,
    gap: Spacing.three,
    paddingBottom: Spacing.four,
  },
  productCard: {
    padding: Spacing.four,
    borderRadius: Spacing.three,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.three, // Gap doesn't always work in older RN FlatList, fallback margin
  },
});
