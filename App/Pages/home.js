import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>Hello</Text>
          <Text style={styles.nameText}>Rahul Sanap</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../Assets/Images/home/avata.png')} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Image source={require('../Assets/Images/home/iconsearch.png')} style={styles.iconSearch} />
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <Image source={require('../Assets/Images/home/education.png')} style={styles.educationImage} />

      <Text style={styles.sectionTitle}>Video Course</Text>
      <ScrollView horizontal={true} style={styles.horizontalScrollContainer}>
        <View style={styles.videoCourseContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('VdCoursePage')}>
            <Image source={require('../Assets/Images/home/vdCourse1.png')} style={styles.videoCourseImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('VdCoursePage')}>
            <Image source={require('../Assets/Images/home/vdCourse2.png')} style={styles.videoCourseImage} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Text style={styles.sectionTitle}>Basic Popular Course</Text>
      <ScrollView horizontal={true} style={styles.horizontalScrollContainer}>
        <View style={styles.courseContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('CourseDetails')}>
            <View style={styles.courseItem}>
              <Image source={require('../Assets/Images/home/popular1.png')} style={styles.courseImage1} />
              <View style={styles.courseText}>
                <Text style={styles.courseTitle}>Basic Python</Text>
                <Text style={styles.courseSubtitle}>15 Lessons</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CourseDetails')}>
            <View style={styles.courseItem}>
              <Image source={require('../Assets/Images/home/popular2.png')} style={styles.courseImage2} />
              <View style={styles.courseText}>
                <Text style={styles.courseTitle}>Basic React Js</Text>
                <Text style={styles.courseSubtitle}>15 Lessons</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Text style={styles.sectionTitle}>Advance Courses</Text>
      <ScrollView horizontal={true} style={styles.horizontalScrollContainer}>
        <View style={styles.advanceCourseContainer}>
          <Image source={require('../Assets/Images/home/advance1.png')} style={styles.advanceCourseImage} />
          <Image source={require('../Assets/Images/home/advance2.png')} style={styles.advanceCourseImage} />
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 18,
    color: '#333',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    left: 3,
    elevation: 2,
    height: 52,
    width: 338
  },
  iconSearch: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  educationImage: {
    width: 338,
    height: 143,
    borderRadius: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  horizontalScrollContainer: {
    marginBottom: 20,
  },
  videoCourseContainer: {
    flexDirection: 'row',
  },
  videoCourseImage: {
    width: 200,
    height: 112.5,
    borderRadius: 5,
    marginRight: 10,
  },
  courseContainer: {
    flexDirection: 'row',
  },
  courseItem: {},
  courseImage1: {
    width: 200,
    height: 101.68,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  courseImage2: {
    width: 193,
    height: 101.68,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    left: 4
  },
  courseText: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    padding: 10,
    width: 193,
    height: 53,
    marginRight: 10,
    shadowColor: '#000',
    elevation: 2,
    marginBottom: 10,
    marginLeft: 4,
    marginRight: 5,
    top: -5,
  },
  courseTitle: {
    height: 17,
    width: 89,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  courseSubtitle: {
    height: 17,
    width: 89,
    fontSize: 9,
    color: '#777',
  },
  advanceCourseContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  advanceCourseImage: {
    width: 200,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
});
