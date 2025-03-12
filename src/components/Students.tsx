import React, { use } from "react";
import { useStudent } from "../StudentProvider";
import MonsterColor from "../components/monsterColors";

const StudenLibrary: React.FC = () => {
  const { students } = useStudent();


  return (
  
      <div className="flex flex-col item-center gap-4 p-4 bg-gray-300 rounded-xl shadow-lg w-auto m-3">
        <h1 className="font-bold text-black/80">Student Bibloteket!</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {students.map((student) => (
            <li 
            className="flex flex-col items-center justify-center w-[280px] h-[420px] rounded-xl drop-shadow-[0_1px_4.9px_rgba(0,0,0,1)] hover:bg-blue-400 bg-blue-300 text-black/80 border-2 border-white relative p-4 gap-4"
            key={student.id}>
              {/* VAD HÄNDER HÄR ? Vi vill kunna lägga stil på dessa, hur gör vi då? */}


             <div className="w-full">
                <p className="text-sm text-gray-600">Name: </p>
                  <div className="bg-white rounded-md p-1 mb-[10px]">{student.firstName}{student.lastName}</div>
              </div>
       
             <div className="w-full"> 
                <p className="text-sm text-gray-600">Education:</p>
                  <div className="bg-white rounded-md p-1 mb-[10px]"> {student.education}</div>
             </div>
            
            {/* röd cirkel*/}
              <div className="absolute -top-2 -right-2 bg-red-600 rounded-full w-[40px] h-[40px] flex items-center justify-center border-2 border-white font-bold -rotate-20"> {student.age}</div>
              <br/>

              {/*inporterar gif beroende på val av färg */}
              {student.color && (
              <img
                src={MonsterColor[student.color]}
                alt={student.color + " monster"}
                className="w-32 h-32 object-cover"
              />
            )}
            </li>
          ))}
        </ul>
      </div>
  
  )
}

export default StudenLibrary;