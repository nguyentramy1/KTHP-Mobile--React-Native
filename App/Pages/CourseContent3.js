import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CourseContent3({ route, navigation }) {
    const { topic = "Default Topic" } = route.params || {}; // Sử dụng giá trị mặc định nếu không có topic
    const colors = ['#1D92FF', '#1D92FF', '#1D92FF', '#D6DEE5', '#D6DEE5']; // Thay đổi màu của dấu gạch chân thứ 2

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                {colors.map((color, index) => (
                    <View
                        key={index}
                        style={[styles.underline, { backgroundColor: color }]} // Áp dụng màu sắc từ mảng
                    />
                ))}
            </View>

            <Text style={styles.title}>{topic}</Text>
            <Text style={styles.description}>
                Python is a general-purpose, high-level programming language. Its design philosophy emphasizes code readability with its notable use of significant whitespace.
            </Text>

            <View style={styles.codeContainer}>
                <Text style={styles.code}>
                    {`x = 5\ny = "John"\nprint(type(x))\nprint(type(y))`}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.runButton}
                onPress={() => { /* Handle run code */ }}
            >
                <Text style={styles.runButtonText}>Run</Text>
            </TouchableOpacity>

            <Text style={styles.outputTitle}>Output</Text>
            <View style={styles.outputContainer}>
                <Text style={styles.output}>{`<class 'int'>\n<class 'str'>`}</Text>
            </View>

            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => { navigation.navigate('CourseContent4') }}
            >
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        flex: 1,
    },
    container1: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 10, 
        marginBottom: 16, 
    },
    underline: {
        width: 65,
        height: 8,
        backgroundColor: '#333', 
        borderRadius: 10, 
        marginRight: 10, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginBottom: 16,
    },
    codeContainer: {
        backgroundColor: '#333',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    code: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'monospace',
    },
    runButton: {
alignSelf: 'flex-end', // Đặt nút sang bên phải
        backgroundColor: '#007BFF', 
        paddingHorizontal: 20, // Thay đổi padding ngang để nút rộng hơn
        paddingVertical: 8, // Điều chỉnh padding dọc
        borderRadius: 20,
        marginBottom: 16,
    },
    runButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    outputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    outputContainer: {
        backgroundColor: '#333',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    output: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'monospace',
    },
    nextButton: {
        backgroundColor: '#007BFF',
        paddingHorizontal: 20, // Thay đổi padding ngang để nút rộng hơn
        paddingVertical: 8, // Điều chỉnh padding dọc
        borderRadius: 20,
    },
    nextButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});