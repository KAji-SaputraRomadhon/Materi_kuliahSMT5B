import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>CURRICULUM VITAE</Text>

      <Text style={styles.label}>Nama Lengkap</Text>
      <Text style={styles.text}>Kurniawan Aji Saputra Romadhon</Text>

      <Text style={styles.label}>NIM</Text>
      <Text style={styles.text}>2488010027</Text>

      <Text style={styles.label}>Asal Sekolah</Text>
      <Text style={styles.text}>SMK Negeri 2 Kota Tangerang</Text>

      <Text style={styles.label}>Cita-cita</Text>
      <Text style={styles.text}>produser</Text>

      <Text style={styles.label}>Rencana Menggapai Cita-cita</Text>
      <Text style={styles.text}>
      Saya ingin menjadi produser musik karena suka mendengarkan aransemen berbagai macam gendre lagu, cara saya mencapai cita-cita saya adalah mendengarkan lebih banyak lagu dan juga membuat aransemen lagu walaupum tidak pernah tapi saya yakin pasti saya bisa MERDEKA.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    justifyContent: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  }, 

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },

  text: {
    fontSize: 16,
    marginTop: 5,
  },
});
