import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const CATEGORIES = [
  { id: '1', name: 'All', icon: 'grid-outline' },
  { id: '2', name: 'Beginner', icon: 'leaf-outline' },
  { id: '3', name: 'Intermediate', icon: 'flame-outline' },
  { id: '4', name: 'Advanced', icon: 'flash-outline' },
];

const FEATURED_COURSES = [
  {
    id: '1',
    title: 'Morning Flow Yoga',
    instructor: 'Sarah Johnson',
    duration: '45 min',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Power Vinyasa',
    instructor: 'Michael Chen',
    duration: '60 min',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&auto=format&fit=crop'
  },
];

export default function ExploreScreen() {
  const [selectedCategory, setSelectedCategory] = useState('1');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning</Text>
          <Text style={styles.name}>Emma</Text>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#6B7280" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search courses..."
            placeholderTextColor="#6B7280"
          />
        </View>

        <View style={styles.categoriesContainer}>
          <FlatList
            data={CATEGORIES}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  selectedCategory === item.id && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(item.id)}>
                <Ionicons
                  name={item.icon}
                  size={20}
                  color={selectedCategory === item.id ? '#7C3AED' : '#6B7280'}
                />
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === item.id && styles.categoryTextActive,
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Courses</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={FEATURED_COURSES}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Link href={`/course/${item.id}`} asChild>
              <TouchableOpacity style={styles.courseCard}>
                <Image source={{ uri: item.image }} style={styles.courseImage} />
                <View style={styles.courseInfo}>
                  <Text style={styles.courseTitle}>{item.title}</Text>
                  <Text style={styles.courseInstructor}>{item.instructor}</Text>
                  <View style={styles.courseMetaContainer}>
                    <View style={styles.courseMeta}>
                      <Ionicons name="time-outline" size={14} color="#6B7280" />
                      <Text style={styles.courseMetaText}>{item.duration}</Text>
                    </View>
                    <View style={styles.courseMeta}>
                      <Ionicons name="stats-chart-outline" size={14} color="#6B7280" />
                      <Text style={styles.courseMetaText}>{item.level}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          )}
          keyExtractor={item => item.id}
          style={styles.coursesList}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#6B7280',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 16,
    borderRadius: 12,
    height: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  categoriesContainer: {
    marginTop: 24,
    paddingLeft: 20,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryButtonActive: {
    backgroundColor: '#EDE9FE',
  },
  categoryText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#6B7280',
  },
  categoryTextActive: {
    color: '#7C3AED',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 32,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  seeAll: {
    fontSize: 14,
    color: '#7C3AED',
  },
  coursesList: {
    paddingLeft: 20,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: 280,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  courseImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  courseInfo: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  courseInstructor: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  courseMetaContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  courseMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  courseMetaText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
});