import "./App.css";
import { StudentProvider } from "./StudentProvider";
import Form from "./components/form";
import StudenLibrary from "./components/Students";


function App() {
  return (
      <StudentProvider>
        <Form />
        <StudenLibrary />
      </StudentProvider>

  )
}

export default App;
