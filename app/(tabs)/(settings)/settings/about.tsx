import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useTheme } from '@/app/context/ThemeContext';

export default function AboutScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'About',
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.text,
        }}
      />

      <ScrollView style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&auto=format&fit=crop',
            }}
            style={styles.logo}
          />
        </View>

        <Text style={[styles.appName, { color: theme.text }]}>Yoga Flow</Text>
        <Text style={[styles.version, { color: theme.text }]}>
          Version 1.0.0
        </Text>

        <View style={[styles.section, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Our Mission
          </Text>
          <Text style={[styles.sectionText, { color: theme.text }]}>
            We're dedicated to making yoga accessible to everyone, everywhere.
            Our platform combines ancient wisdom with modern technology to
            create a unique and enriching practice experience.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            The Team
          </Text>
          <Text style={[styles.sectionText, { color: theme.text }]}>
            Our team consists of certified yoga instructors, wellness experts,
            and technology professionals working together to bring you the best
            possible yoga experience.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Contact Us
          </Text>
          <Text style={[styles.sectionText, { color: theme.text }]}>
            Email: hello@yogaflow.com{'\n'}
            Phone: (555) 123-4567{'\n'}
            Address: 123 Wellness Street, Mindful City, MC 12345
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  version: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 24,
  },
  section: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    opacity: 0.8,
  },
});
