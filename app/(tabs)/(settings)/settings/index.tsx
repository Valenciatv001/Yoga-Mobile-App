import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import { router } from 'expo-router';
import { useTheme } from '@/app/context/ThemeContext';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [downloadOverWifi, setDownloadOverWifi] = useState(true);
  const { isDarkMode, toggleTheme, theme } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView>
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]}>Settings</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Preferences
          </Text>

          <View style={[styles.settingItem, { backgroundColor: theme.card }]}>
            <View style={styles.settingInfo}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={theme.text}
              />
              <Text style={[styles.settingText, { color: theme.text }]}>
                Push Notifications
              </Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: theme.border, true: theme.primary }}
            />
          </View>

          <View style={[styles.settingItem, { backgroundColor: theme.card }]}>
            <View style={styles.settingInfo}>
              <Ionicons name="wifi-outline" size={24} color={theme.text} />
              <Text style={[styles.settingText, { color: theme.text }]}>
                Download over WiFi only
              </Text>
            </View>
            <Switch
              value={downloadOverWifi}
              onValueChange={setDownloadOverWifi}
              trackColor={{ false: theme.border, true: theme.primary }}
            />
          </View>

          <View style={[styles.settingItem, { backgroundColor: theme.card }]}>
            <View style={styles.settingInfo}>
              <Ionicons name="moon-outline" size={24} color={theme.text} />
              <Text style={[styles.settingText, { color: theme.text }]}>
                Dark Mode
              </Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: theme.border, true: theme.primary }}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Account
          </Text>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: theme.card }]}
            onPress={() => router.push('/settings/edit-profile')}
          >
            <View style={styles.settingInfo}>
              <Ionicons name="person-outline" size={24} color={theme.text} />
              <Text style={[styles.settingText, { color: theme.text }]}>
                Edit Profile
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={theme.text} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: theme.card }]}
            onPress={() => router.push('/settings/change-password')}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="lock-closed-outline"
                size={24}
                color={theme.text}
              />
              <Text style={[styles.settingText, { color: theme.text }]}>
                Change Password
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={theme.text} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: theme.card }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons name="download-outline" size={24} color={theme.text} />
              <Text style={[styles.settingText, { color: theme.text }]}>
                Downloaded Content
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Support
          </Text>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: theme.card }]}
            onPress={() => router.push('/settings/help')}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="help-circle-outline"
                size={24}
                color={theme.text}
              />
              <Text style={[styles.settingText, { color: theme.text }]}>
                Help
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={theme.text} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: theme.card }]}
            onPress={() => router.push('/settings/privacy-policy')}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="document-text-outline"
                size={24}
                color={theme.text}
              />
              <Text style={[styles.settingText, { color: theme.text }]}>
                Privacy Policy
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={theme.text} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: theme.card }]}
            onPress={() => router.push('/settings/about')}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={theme.text}
              />
              <Text style={[styles.settingText, { color: theme.text }]}>
                About
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.logoutButton, { backgroundColor: '#EF4444' }]}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 12,
  },
  logoutButton: {
    marginTop: 32,
    marginBottom: 40,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
