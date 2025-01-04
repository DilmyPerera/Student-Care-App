import { ScrollView, View } from "react-native";
import {subjects ,courses, marks}from '../db/StudentsDb';

export default function SubjectPage({route}){
    const student = route.params;
    const studentSubject = subjects.filter((s) => s.course_id === student.course_id);
    const course = courses.find((c) => c.id === student.course_id);
    const studentMarks = marks.filter((m)=>m.student_id === student.id);

    const totalMarks = studentMarks.reduce((sum,mark)=>sum+mark.marks,0);
    const averageMarks = studentMarks.length > 0 ? (totalMarks/studentMarks.length).toFixed(2) : 0;

    const renderItem = ({ item }) => {
        const subjectMark = studentMarks.find((m)=>m.subject_id === item.id)?.marks || 'N/A';
    
    return (
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>{item.name}</Text>
          <Text style={styles.tableCell}>{subjectMark}</Text>
        </View>
      );
    };
  
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Subjects</Text>
        <Text style={styles.info}>Course Name: {course.name}</Text>
        <Text style={styles.info}>Number of Subjects: {studentSubjects.length}</Text>
        <Text style={styles.info}>Average Marks: {averageMarks}</Text>
  
        <View style={styles.tableHeaderRow}>
          <Text style={styles.tableHeaderCell}>Subject</Text>
          <Text style={styles.tableHeaderCell}>Marks</Text>
        </View>
  
        <FlatList
          data={studentSubjects}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    info: {
      fontSize: 18,
      marginBottom: 8,
    },
    tableHeaderRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingBottom: 4,
    },
    tableHeaderCell: {
      fontSize: 16,
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    tableCell: {
      fontSize: 16,
      flex: 1,
      textAlign: 'center',
    },
  });
