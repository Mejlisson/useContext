import React, { createContext, useState, useContext } from "react";

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  utbildning: string;
  age: string;
}

interface StudentProviderProps {
  students: Student[];
  addStudent: (student: Student) => void;
  deleteStudent: (id: number) => void;
}

const StudentContext = createContext<StudentProviderProps | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (student: Student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  const deleteStudent = (id: number) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !==id))
  }

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>

  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("Barnen måste vara innanför StudentProvider'n.");
  }
  return context;
};