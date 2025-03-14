import { useState } from "react";
import { useStudent } from "../StudentProvider";
import MonsterColor from "../components/monsterColors";

const StudentLibrary: React.FC = () => {
  const { students, setStudents } = useStudent();
  const [selectedStudent, setSelectedStudent] = useState(null);

  
  const openModal =(student) =>  { //Öppna modal
    setSelectedStudent(student);
    console.log("Modalen för: ", student , "har öppnats");
  };

  const closeModal = () => { //Stäng modal
    setSelectedStudent(null);
    console.log("Modalen har stängts");
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents); 
    closeModal();
    console.log("Student med id:", id, "har tagit bort");
  };

  return (
    <div>
      <div className="flex flex-col item-center gap-4 p-4 bg-white rounded-xl w-auto h-auto m-3"style={{ background: "linear-gradient(to bottom, #AFC8EE, white, #AFC8EE)" }}>
        <h1 className="font-bold text-black/80">Student Bibloteket!</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {students.map((student) => (
            <li
              key={student.id}
              className="flex flex-col items-center justify-center w-[280px] h-[420px] rounded-xl drop-shadow-[0_1px_4.9px_rgba(0,0,0,1)] hover:bg-blue-400 bg-blue-300 text-black/80 border-2 border-white relative p-4 gap-4 cursor-pointer"
            
              onClick={() => openModal(student)}> 

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
              <div className="absolute -top-2 -right-2 bg-red-600 rounded-full w-[40px] h-[40px] flex items-center justify-center border-2 border-white text-lg font-bold -rotate-20"> {student.age}</div>
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
      
        {/* MODAL*/}

        {selectedStudent && (
          <div className="fixed top-4 right-30 h-[700px] w-[530px] rounded-xl drop-shadow-[0_1px_4.9px_rgba(0,0,0,1)] hover:bg-blue-400 bg-blue-300 text-black/80 border-2 border-white p-4 gap-4" >
            <div className="">

 
              <button onClick = {() => deleteStudent(selectedStudent.id)}
              className="hover:text-red-600 text-blue-700 font-bold cursor-pointer"style={{ fontFamily: "'Frijole', cursive" }}> Delete
              </button>

              <h2 className="text-center text-2xl font-bold text-blue-700 mt-2 border-b-4 border-yellow-300 mb-2"
                  style={{ fontFamily: "'Frijole', cursive" }}> You have selected</h2>

              <h2 className=" text-blue-700"style={{ fontFamily: "'Frijole', cursive" }}>Name: {selectedStudent.firstName} {selectedStudent.lastName}</h2>
              <p className=" text-blue-700"style={{ fontFamily: "'Frijole', cursive" }}>Education: {selectedStudent.education}</p>
              
              
              <div className="relative group">
                  <p className="absolute -top-40 -right-7 bg-red-600 rounded-full w-[80px] h-[80px] flex items-center justify-center border-2 border-white font-bold -rotate-20">{selectedStudent.age}</p>
                
                      <button onClick = {closeModal}
                        className="absolute -top-40 -right-7 bg-blue-700 rounded-full w-[80px] h-[80px] border-2 border-white text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Close
                      </button>
              </div>
              
              <img src={MonsterColor[selectedStudent.color]}
                   alt={selectedStudent.color + "monster"}
                   className=""
              />
            </div>
          </div>
        )}
  </div>
  )
}

export default StudentLibrary;