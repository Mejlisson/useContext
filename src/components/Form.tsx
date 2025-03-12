import { useStudent } from '../StudentProvider';
import { FormEvent, useState } from 'react';
import MonsterColor from './monsterColors';


const Form = () => {
  const { addStudent } = useStudent();
  const [selectedColor, setSelectedColor] = useState("");
 
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const firstName = data.get("firstName") as string;
    const lastName = data.get("lastName") as string;
    const age = data.get("age") as string;
    const education =data.get("education") as string;
    const color = data.get("color") as string;


    //matchar bilden med vald färg
    const image = MonsterColor[color] || MonsterColor["red"]; // Default-bild om ingen färg matchas

    const newStudent = {
      id: Date.now(),
      firstName,
      lastName,
      age,
      education,
      color,
      image
    };

    addStudent(newStudent);
    console.log(newStudent);
  };

  return (
   
    <form className="flex flex-col justify-center w-[280px] h-[400px] rounded-lg bg-blue-300 gap-2 p-4 m-3 "
          onSubmit={handleSubmit}>
      <h1>Lägg till Student</h1>
      <input type="text" 
              className="border-2 border-gray-200 bg-white/70"
              placeholder="Förnamn" 
              name="firstName" 
              required
      />
      <input type="text" 
              className="border-2 border-gray-200  bg-white/70 text-black"
              placeholder="Efternamn" 
              name="lastName" 
              required
      />
        <input type="text" 
              className="border-2 border-gray-200  bg-white/70 text-black"
              placeholder="Education" 
              name="education" 
              required
      />
      <input type='text'
             className='border-2 border-gray-200  bg-white/70'
             placeholder='Age'
             name='age'
             required
      />
     <select 
        name="color" 
        className="border-2 border-gray-200 bg-white/80 text-black p-1 mt-5" 
        required
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="">Välj en färg</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="purple">Purple</option>
      </select>
      <button 
      className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="submit">Lägg till</button>
    </form>
  
  );
}

export default Form;