import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>About Me</Text>

        <Image
          source={require('@/assets/images/WIN_20241204_10_52_47_Pro.jpg')}
          style={styles.profileImage}
        />

        <View style={styles.infoContainer}>
          <InfoItem label="Nama" value="Nadhif Tri Aryastya" />
          <InfoItem label="Kelas" value="XI RPL 4" />
          <InfoItem label="Asal Sekolah" value="SMK Taruna Bhakti" />
          <InfoItem label="Hobi" value="Bermain Game" />
          <InfoItem label="Cita-cita" value="Programmer" />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Go To Home"
            onPress={() => router.push('/')}
            color="#007AFF"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Komponen kecil agar lebih rapi
function InfoItem({ label, value }) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>{label} :</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    color: '#111',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginBottom: 40,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#F8F9FB',
    borderRadius: 16,
    padding: 20,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoItem: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  infoValue: {
    fontSize: 16,
    color: '#555',
    marginTop: 3,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 40,
  },
});
