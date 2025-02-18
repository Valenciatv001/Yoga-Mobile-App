import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/app/context/ThemeContext';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const FAQ_ITEMS = [
  {
    question: 'How do I track my progress?',
    answer:
      'Your progress is automatically tracked as you complete lessons. You can view your progress in the My Courses tab and on your Profile.',
  },
  {
    question: 'Can I download classes for offline viewing?',
    answer:
      'Yes! Look for the download icon on any class to save it for offline viewing. You can manage your downloaded content in Settings.',
  },
  {
    question: 'How do I contact support?',
    answer:
      'You can reach our support team at support@yogaapp.com or through the in-app chat feature available Monday-Friday, 9am-5pm EST.',
  },
];

export default function HelpScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Help & Support',
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.text,
        }}
      />

      <ScrollView style={styles.content}>
        <View style={[styles.searchContainer, { backgroundColor: theme.card }]}>
          <Ionicons name="search-outline" size={20} color={theme.text} />
          <Text style={[styles.searchPlaceholder, { color: theme.text }]}>
            Search help articles...
          </Text>
        </View>

        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Frequently Asked Questions
        </Text>

        {FAQ_ITEMS.map((item, index) => (
          <View
            key={index}
            style={[styles.faqItem, { backgroundColor: theme.card }]}
          >
            <Text style={[styles.question, { color: theme.text }]}>
              {item.question}
            </Text>
            <Text style={[styles.answer, { color: theme.text }]}>
              {item.answer}
            </Text>
          </View>
        ))}

        <View style={[styles.contactCard, { backgroundColor: theme.card }]}>
          <Text style={[styles.contactTitle, { color: theme.text }]}>
            Need more help?
          </Text>
          <TouchableOpacity
            style={[styles.contactButton, { backgroundColor: theme.primary }]}
          >
            <Text style={styles.contactButtonText}>Contact Support</Text>
          </TouchableOpacity>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  searchPlaceholder: {
    marginLeft: 8,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  faqItem: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  answer: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
  contactCard: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  contactButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
