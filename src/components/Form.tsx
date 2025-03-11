import { useStudent } from '../StudentProvider';




const Form = () => {
  const { addStudent } = useStudent();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const firstName = data.get("firstName") as string;
    const lastName = data.get("lastName") as string;
    const utbildning = data.get("utbildning") as string;
    const age = data.get("age") as string;
    console.log(firstName, lastName, utbildning);

    const newStudent = {
      id: Date.now(),
      firstName,
      lastName,
      utbildning,
      age
    };

    addStudent(newStudent);
    console.log(newStudent);
  };

  return (
   
    <form className="flex flex-col justify-center w-auto rounded-lg bg-blue-300 gap-2 p-4"
          onSubmit={handleSubmit}>
      <h1>Lägg till Student</h1>
      <input type="text" 
              className="border-2 border-gray-200"
              placeholder="Förnamn" 
              name="firstName" 
              required
      />
      <input type="text" 
              className="border-2 border-gray-200"
              placeholder="Efternamn" 
              name="lastName" 
              required
      />
      <input type="text" 
              className="border-2 border-gray-200"
              placeholder="Utbildning" 
              name="utbildning" 
              required
      />
      <input type="text" 
              className="border-2 border-gray-200"
              placeholder="Ålder" 
              name="age" 
              required
      />
      <button 
      className="bg-blue-500 mt-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="submit">Lägg till</button>
    </form>
  
  );
}

export default Form;