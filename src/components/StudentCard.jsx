import React from "react";

function StudentCard({ student }) {
  return (
    <div style={styles.card}>
      <div style={styles.leftColumn}>
        <h2 style={styles.name}>
          {student.firstName} {student.lastName}
        </h2>
        <p style={styles.age}>Age: {student.age}</p>
        <p style={styles.school}>School: {student.schoolName}</p>
        <p style={styles.address}>
          Address: {student.address.street}, {student.address.city},{" "}
          {student.address.state} {student.address.zipCode}
        </p>
      </div>
      <div style={styles.rightColumn}>
        <h3 style={styles.sectionTitle}>Hobbies:</h3>
        <ul style={styles.list}>
          {student.hobbies.map((hobby, idx) => (
            <li key={idx} style={styles.listItem}>
              {hobby}
            </li>
          ))}
        </ul>
        <h3 style={styles.sectionTitle}>Courses:</h3>
        <ul style={styles.list}>
          {student.courses.map((course, idx) => (
            <li key={idx} style={styles.courseItem}>
              <strong>{course.courseName}:</strong>{" "}
              <span style={styles.courseDescription}>{course.description}</span>
              <p style={styles.grade}>Grade: {course.grade}</p>
              <p>
                <b>Prerequisites:</b>
                {course.prerequisites.length > 0
                  ? course.prerequisites.join(", ")
                  : "None"}
              </p>
              <p style={styles.difficultyTitle}>
                <b>Difficulty Levels:</b>
              </p>
              <ul style={styles.difficultyList}>
                {course.difficulty.map((level, i) => (
                  <li key={i} style={styles.difficultyItem}>
                    {level}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "20px",
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  leftColumn: {
    flex: "1",
    marginRight: "20px",
  },
  rightColumn: {
    flex: "2",
  },
  name: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  age: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  school: {
    fontSize: "16px",
    marginBottom: "10px",
    color: "#666",
  },
  address: {
    fontSize: "14px",
    marginBottom: "15px",
    color: "#666",
  },
  sectionTitle: {
    fontSize: "20px",
    marginTop: "0px",
    marginBottom: "10px",
    color: "#333",
    borderBottom: "1px solid #ddd",
    paddingBottom: "5px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "15px",
  },
  listItem: {
    fontSize: "14px",
    color: "#444",
    marginBottom: "5px",
  },
  courseItem: {
    marginBottom: "15px",
  },
  courseDescription: {
    fontSize: "14px",
    color: "#666",
    display: "block",
    marginBottom: "5px",
  },
  grade: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "5px",
  },
  difficultyTitle: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "5px",
  },
  difficultyList: {
    paddingLeft: "20px",
  },
  difficultyItem: {
    fontSize: "14px",
    color: "#444",
  },
};

export default StudentCard;
