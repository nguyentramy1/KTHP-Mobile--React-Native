import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Color from '../Shared/Color';
import { useNavigation } from '@react-navigation/native';

export default function CourseDetails() {

    const navigation = useNavigation();

    return (
        <View style={styles.containerbody}>
            <Text style={styles.title}>Python Basics</Text>
            <Text style={styles.subtitle}>By Tubeguruji</Text>

            <View style={styles.imageContainer}>
            <Image
                source={require('../Assets/Images/coursedetail/cousrseDT.png')}
                style={styles.image}
            />

            </View>
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>About Course</Text>
                <Text style={styles.description}>
                    Python is a general-purpose, high-level programming language. Its design philosophy emphasizes code readability with its notable use of significant whitespace.
                </Text>
                <Text style={styles.sectionTitle}>Course Content</Text>
                {['Introduction', 'Variables', 'Data Types', 'Numbers', 'Casting'].map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.courseItem}
                        onPress={() => navigation.navigate('CourseContent', { topic: item })}
                    >
                        <Text style={styles.courseIndex}>{`0${index + 1}`}</Text>
                        <Text style={styles.courseTitle}>{item}</Text>
                        <Ionicons name="play-circle-outline" size={24} color={Color.primary} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerbody:{
        top:-60,
    },
    imageContainer: {
        // position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        width: 332,
        height: 220,
        left: 30,
        bottom: 10,
        marginBottom:-15
    },
    // image: {
    //     width: 332,
    //     height: 165,
    //     top: -60,
    //     // left: 1,
    //     borderRadius:10
    //     // resizeMode: 'cover',
    // },
    title: {
        // position: 'absolute',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        top: 72, // Điều chỉnh vị trí theo chiều dọc
        textAlign: 'center',
        // width: 147,
        // height: 17,
        left: -85
    },
    subtitle: {
        // position: 'absolute',
        fontSize: 16,
        color: 'black',
        top: 70, // Điều chỉnh vị trí theo chiều dọc
        textAlign: 'center',
        left: -125
    },
    container: {
        paddingTop: 40,
        marginTop: -20,
        backgroundColor: "#fff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        marginTop:1
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 20,
    },
    courseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    courseIndex: {
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 16,
        color: '#b3b1b1'
    },
    courseTitle: {
        fontSize: 16,
        flex: 1,
        
    },
});