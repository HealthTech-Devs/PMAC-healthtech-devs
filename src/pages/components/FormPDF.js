import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
export default function FormPDF({ data }) {
  const {
    major,
    minor,
    expectedGrad,
    overallGPA,
    date,
    scores,
    examDate,
    appType,
    faculty,
  } = data;
  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{major}</Text>
            <Text>{minor}</Text>
            <Text>{expectedGrad}</Text>
            <Text>{overallGPA}</Text>
            <Text>{date}</Text>
            <Text>{scores}</Text>
            <Text>{examDate}</Text>
            <Text>{appType}</Text>
            <Text>{faculty}</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
