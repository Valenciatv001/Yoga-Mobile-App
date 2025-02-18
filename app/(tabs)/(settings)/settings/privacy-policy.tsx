import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/app/context/ThemeContext';
import { Stack } from 'expo-router';

export default function PrivacyPolicyScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Privacy Policy',
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.text,
        }}
      />

      <ScrollView style={styles.content}>
        <Text style={[styles.lastUpdated, { color: theme.text }]}>
          Last updated: January 1, 2025
        </Text>

        <View style={[styles.section, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            1. Information We Collect
          </Text>
          <Text style={[styles.sectionText, { color: theme.text }]}>
            We collect information that you provide directly to us, including
            when you create an account, make a purchase, or contact us for
            support. This may include your name, email address, and payment
            information.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            2. How We Use Your Information
          </Text>
          <Text style={[styles.sectionText, { color: theme.text }]}>
            We use the information we collect to provide, maintain, and improve
            our services, process your transactions, and communicate with you
            about your account and our services.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            3. Information Sharing
          </Text>
          <Text style={[styles.sectionText, { color: theme.text }]}>
            We do not sell or rent your personal information to third parties.
            We may share your information with service providers who assist us
            in providing our services.
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            4. Your Rights
          </Text>
          <Text style={[styles.sectionText, { color: theme.text }]}>
            You have the right to access, correct, or delete your personal
            information. You can manage your preferences through your account
            settings or contact us for assistance.
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
  lastUpdated: {
    fontSize: 14,
    marginBottom: 20,
    opacity: 0.7,
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
