import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/Pages/Login';
import Home from './App/Pages/home';
import VdCoursePage from './App/Pages/vdcourse';
import CourseDetails from './App/Pages/CourseDetails';
import CourseContent from './App/Pages/CourseContent';
import CourseContent2 from './App/Pages/CourseContent2'; // Import CourseContent2
import CourseContent3 from './App/Pages/CourseContent3'; // Import CourseContent3
import CourseContent4 from './App/Pages/CourseContent4'; // Import CourseContent4
import CourseContentFinish from './App/Pages/CourseContentFinish'; // Import CourseContentFinish
import Profile from './App/Pages/Profile';
import Setting from './App/Pages/setting'; // Import Setting component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerShown: false, 
          }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="VdCoursePage" 
          component={VdCoursePage} 
          options={{
            headerTitle: "", 
            headerBackTitleVisible: false, 
          }} 
        />
        <Stack.Screen 
          name="CourseDetails" 
          component={CourseDetails} 
          options={{
            headerTitle: "", 
            headerBackTitleVisible: false, 
          }} 
        />
        <Stack.Screen 
          name="CourseContent" 
          component={CourseContent} 
          options={{
            headerTitle: "", 
            headerBackTitleVisible: false, 
          }} 
        />
        <Stack.Screen 
          name="CourseContent2" 
          component={CourseContent2} 
          options={{
            headerTitle: "", 
            headerBackTitleVisible: false, 
          }} 
        />
        <Stack.Screen 
          name="CourseContent3" 
          component={CourseContent3} 
          options={{
            headerTitle: "", 
            headerBackTitleVisible: false, 
          }} 
        />
        <Stack.Screen 
          name="CourseContent4" 
          component={CourseContent4} 
          options={{
            headerTitle: "", 
            headerBackTitleVisible: false, 
          }} 
        />
        <Stack.Screen 
          name="CourseContentFinish" 
          component={CourseContentFinish} 
          options={{
            headerTitle: "", 
            headerBackTitleVisible: false, 
          }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            headerTitle: "Profile", 
            headerBackTitleVisible: false, 
          }} 
        />
        <Stack.Screen 
          name="Setting" 
          component={Setting} 
          options={{
            headerTitle: "Setting & Privacy", 
            headerBackTitleVisible: false, 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
