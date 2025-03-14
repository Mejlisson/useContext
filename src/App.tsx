import "./App.css";
import { StudentProvider } from "./StudentProvider";
import Form from "./components/form";
import StudenLibrary from "./components/Students";


function App() {
  return (
    <div className="flex flex-row">
      <StudentProvider>
        <Form />
        <StudenLibrary />
      </StudentProvider>
    </div>
  )
}

export default App;
