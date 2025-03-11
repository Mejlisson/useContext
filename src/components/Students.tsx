import React, { use } from "react";
import { useStudent } from "../StudentProvider";

const monkeyImage = "../src/monkyMonk.jpg";
const StudenLibrary: React.FC = () => {
  const { students } = useStudent();
  const { deleteStudent } = useStudent();


  return (
  
      <div className="flex flex-col justify-center gap-1 items-center rounded-xl bg-gray-200">
        <h1 className="font-bold text-black/80 border-X-b-2">Student Bibloteket!</h1>
        <ul className="flex flex-col justify-start w-[180px] h-[280px] bg-blue-200 items-center 
         cursor-pointer ">
          {students.map((student) => (
            <li 
            className="hover:bg-blue-300 font-bold text-black/80 border-b-2"
            onClick={() => deleteStudent(student.id)}
            key={student.id}>
              Name: {student.firstName}
              <br />
              Lastname: {student.lastName}
              <br />
              Utbildning: {student.utbildning}
              <br />
              Ålder: {student.age}
              <div>
                <img src={monkeyImage} alt="monkey" className="w-20 h-20" />
              </div>
            </li>
          ))}
        </ul>
      </div>
  
  )


}

export default StudenLibrary;