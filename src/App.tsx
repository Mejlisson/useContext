import "./App.css";
import { StudentProvider } from "./StudentProvider";
import Form from "./components/form";
import StudenLibrary from "./components/Students";


function App() {
  return (
      <StudentProvider>
  <div className="flex justify-center items-center h-screen w-screen white">
    <div className="flex flex-col justify-center gap-2 items-center h-screen w-screen white">
      <h1>Student Libraryanary</h1>
      <div className="flex flex-row justify-center gap-5 items-center  ">
        <Form />
        <StudenLibrary />
      </div>
    </div>
 
  </div>
      </StudentProvider>

  )
}

export default App;
