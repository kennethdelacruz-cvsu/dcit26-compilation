import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Student Profile</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.info}>Name:</Text>
        <Text style={styles.student_info}>Kenneth A. Delacruz</Text>

        <Text style={styles.info}>Age:</Text>
        <Text style={styles.student_info}>21</Text>

        <Text style={styles.info}>Course/Year/Section:</Text>
        <Text style={styles.student_info}>BSCS 3-3</Text>

        <Text style={styles.info}>About Me:</Text> 
        <Text style={styles.student_info}>Interested with creative programming and exploring the intersection of technology and design, particularly in web development and UI/UX design. I like turning ideas into functional and visually engaging digital experiences.</Text>

        <Text style={styles.info}>Achievements:</Text>
        <Text style={styles.student_info}>• CSSO COMRECS Member • High Honor SHS Graduate • Hackathon Participant</Text>

        <Text style={styles.info}>Skills:</Text>
        <Text style={styles.student_info}>• WebDevelopment • UI/UX Design • Blender 3D Modeling • MySQL Database Management</Text>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6dbeff',
    paddingTop: 60,
    alignItems: 'center',
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 30,
  },
  infoContainer: {
    width: '80%',
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  info: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 2,
  },
  student_info: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2f2f2f',
    marginLeft: 15, 
    marginBottom: 12,
  },
});