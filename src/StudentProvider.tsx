import React, { createContext, useState, useContext } from "react";

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  age: string;
  education: string;
  color: string;
}

interface StudentProviderProps {
  students: Student[];
  addStudent: (student: Student) => void;
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>; 
}

const StudentContext = createContext<StudentProviderProps | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (student: Student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <div className="flex flex-row">
    <StudentContext.Provider value={{ students, addStudent, setStudents }}> 
      {children}
    </StudentContext.Provider>
    </div>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("Barnen måste vara innanför StudentProvider'n.");
  }
  return context;
};
